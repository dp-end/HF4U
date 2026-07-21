package com.example.event.Service.EventRegistration;

import org.springframework.stereotype.Service;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventRegistration;
import com.example.event.Entity.EventStatus;
import com.example.event.Entity.User;
import com.example.event.Exception.miniExceptions.AlreadyRegisteredException;
import com.example.event.Exception.miniExceptions.EventCapacityFullException;
import com.example.event.Exception.miniExceptions.ResourceNotFoundException;
import com.example.event.Exception.miniExceptions.notAllowRegisterException;
import com.example.event.Repository.EventRegistrationRepository;
import com.example.event.Repository.EventRepository;

import com.example.event.Dto.MyResgistrationResponseDTO;
import com.example.event.Dto.ParticipantResponseDTO;

import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Service
@RequiredArgsConstructor
public class EventRegistrationServiceImpl implements EventRegistrationService {

    private final EventRegistrationRepository eventRegistrationRepository;
    private final EventRepository eventRepository;


    @Override
    public void registerToEvent(long eventId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    User student = (User) authentication.getPrincipal();

    Event event = eventRepository.findById(eventId).orElseThrow(
        ()-> new ResourceNotFoundException("Etkinlik bulunamadı. Id: " + eventId)
    );

    if(event.getStatus() != EventStatus.APPROVED){
        throw new notAllowRegisterException("Etkinlik henüz onaylanmadı");
    }
    
    if(eventRegistrationRepository.existsByStudentAndEvent(student, event)){
        throw new AlreadyRegisteredException("Bu etkinliğe zaten kayıtlısın");
    }

    long currentParticipants = eventRegistrationRepository.countByEvent(event);

    if(currentParticipants >= event.getCapacity()) {
        throw new EventCapacityFullException("Etkinlik kontenjanı dolu");
    }

    EventRegistration registration = new EventRegistration();
    registration.setStudent(student);
    registration.setEvent(event);
    registration.setRegisteredAt(LocalDateTime.now());

    eventRegistrationRepository.save(registration);
    }

        @Override
    public List<MyResgistrationResponseDTO> getMyRegistrations() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User student = (User) authentication.getPrincipal();
        return eventRegistrationRepository.findByStudent(student).stream()
        .map(this::mapToMyRegistrationResponse).toList();
    }

    private MyResgistrationResponseDTO mapToMyRegistrationResponse(EventRegistration eventRegistration){
        MyResgistrationResponseDTO dto = new MyResgistrationResponseDTO();
        dto.setEventId(eventRegistration.getEvent().getId());
        dto.setTitle(eventRegistration.getEvent().getTitle());
        dto.setLocation(eventRegistration.getEvent().getLocation());
        dto.setEventDate(eventRegistration.getEvent().getEventDate());

        return dto;
    }


    @Override
    public List<ParticipantResponseDTO> getEventParticipants(long eventId) {
        Event event =eventRepository.findById(eventId).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı. Id: " + eventId));
        return eventRegistrationRepository.findByEvent(event).stream()
        .map(this::mapToParticipantResponse).toList();
    }
    
    private ParticipantResponseDTO mapToParticipantResponse(EventRegistration eventRegistration){
        ParticipantResponseDTO dto = new ParticipantResponseDTO();
        dto.setId(eventRegistration.getId());
        dto.setFullName(eventRegistration.getStudent().getFullName());
        dto.setEmail(eventRegistration.getStudent().getEmail());
        return dto;
    }

    @Override
    public void cancelRegistration(long eventId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User student = (User) authentication.getPrincipal();
        Event event = eventRepository.findById(eventId).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı"));
        EventRegistration eventRegistration =eventRegistrationRepository.findByStudentAndEvent(student, event).orElseThrow(
            ()-> new ResourceNotFoundException("Kayıt bulunamadı")
        );
        if(eventRegistration != null){
        eventRegistrationRepository.delete(eventRegistration);
        }
    }

}

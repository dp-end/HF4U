package com.example.event.Service.EventRegistration;

import org.springframework.stereotype.Service;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventRegistration;
import com.example.event.Entity.User;
import com.example.event.Exception.AlreadyRegisteredException;
import com.example.event.Exception.EventCapacityFullException;
import com.example.event.Exception.ResourceNotFoundException;
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
        ()-> new ResourceNotFoundException("Event not found with id :" + eventId)
    );
    
    if(eventRegistrationRepository.existsByStudentAndEvent(student, event)){
        throw new AlreadyRegisteredException("You are already registered for this event");
    }

    long currentParticipants = eventRegistrationRepository.countByEvent(event);

    if(currentParticipants >= event.getCapacity()) {
        throw new EventCapacityFullException("Event capacity is full");
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
        Event event =eventRepository.findById(eventId).orElseThrow(()-> new ResourceNotFoundException("Event not found with id:" + eventId));
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

}

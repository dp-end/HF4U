package com.example.event.Service.Event;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Entity.Event;
import com.example.event.Entity.EventStatus;
import com.example.event.Entity.Role;
import com.example.event.Entity.User;
import com.example.event.Exception.miniExceptions.ResourceNotFoundException;
import com.example.event.Exception.miniExceptions.UnauthorizedEventAccessException;
import com.example.event.Repository.EventRegistrationRepository;
import com.example.event.Repository.EventRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;
    private final EventRegistrationRepository eventRegistrationRepository;

    @Override
    public EventResponseDTO createEvent(EventRequestDTO request) {
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       User currentUser = (User) authentication.getPrincipal(); 
       Event event = new Event();

       event.setTitle(request.getTitle());
       event.setDescription(request.getDescription());
       event.setLocation(request.getLocation());
       event.setEventDate(request.getEventDate());
       event.setCapacity(request.getCapacity());
       event.setCreatedAt(LocalDateTime.now());
       event.setCreatedBy(currentUser); 
       event.setStatus(EventStatus.PENDING);
       event.setCategory(request.getCategory());
       event.setCoverImageUrl(request.getCoverImageUrl());
       Event savedEvent = eventRepository.save(event);
       return mapToResponse(savedEvent);
    }

    @Override
    public List<EventResponseDTO> getAllEvents() {
       return eventRepository.findByStatus(EventStatus.APPROVED).stream()
       .map(this::mapToResponse).toList();
    }

    @Override
    public EventResponseDTO getEventById(long id) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı. Id: " + id));
        return mapToResponse(event);
    }

    @Override
    public EventResponseDTO updateEvent(long id, EventRequestDTO request) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı. Id: " + id));
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        boolean isAdmin = currentUser.getRole() == Role.ADMIN;
        boolean isOwner = event.getCreatedBy().getId()==(currentUser.getId());

        if(!isAdmin && !isOwner){
            System.out.println("Update merhodu çalışıyor mu");
            throw new UnauthorizedEventAccessException("Sadece kendi etkinliklerini yönetebilirsin");
        }
        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setLocation(request.getLocation());
        event.setEventDate(request.getEventDate());
        event.setCapacity(request.getCapacity());
        event.setCategory(request.getCategory());
        event.setCoverImageUrl(request.getCoverImageUrl());

        Event updatedEvent= eventRepository.save(event);

        return mapToResponse(updatedEvent);

    }

    @Override
    public void deleteEvent(long id) {
        
    if (!eventRepository.existsById(id)) {
            throw new ResourceNotFoundException("Etkinlik bulunamadı. Id: " + id);
        }
        
        eventRepository.deleteById(id);
    }

    //Event bilgisini çıktıda döndürmemizi sağlıyor.
    private EventResponseDTO mapToResponse(Event event) {

        EventResponseDTO response = new EventResponseDTO();

        long registeredCount = eventRegistrationRepository.countByEvent(event);
        long availableSpots = Math.max(0, event.getCapacity()-registeredCount);

        response.setId(event.getId());
        response.setTitle(event.getTitle());
        response.setDescription(event.getDescription());
        response.setLocation(event.getLocation());
        response.setEventDate(event.getEventDate());
        response.setCapacity(event.getCapacity());
        response.setCreatedAt(event.getCreatedAt());
        response.setEventStatus(event.getStatus());
        response.setCategory(event.getCategory());
        response.setCoverImageUrl(event.getCoverImageUrl());
        response.setRegisteredCount(registeredCount);
        response.setAvailableSpots(availableSpots);

        if(event.getCreatedBy() != null){
            response.setClubName(event.getCreatedBy().getFullName());
        }

        return response;
    }

    @Override
    public List<EventResponseDTO> getMyEvents() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        return eventRepository.findByCreatedBy(currentUser).stream()
        .map(this::mapToResponse).toList();
    }

    @Override
    public EventResponseDTO approveEvent(long id) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı"));
        event.setStatus(EventStatus.APPROVED);
        Event savedEvent = eventRepository.save(event);
        return mapToResponse(savedEvent);
    }

    @Override
    public EventResponseDTO rejectEvent(long id) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Etkinlik bulunamadı"));
        event.setStatus(EventStatus.REJECTED);
        Event savedEvent = eventRepository.save(event);
        return mapToResponse(savedEvent);
    }

    @Override
    public List<EventResponseDTO> getPendingEvents() {
       return eventRepository.findByStatus(EventStatus.PENDING).stream()
       .map(this::mapToResponse).toList();
    }

}

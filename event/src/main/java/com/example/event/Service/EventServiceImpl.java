package com.example.event.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Entity.Event;
import com.example.event.Repository.EventRepository;

import org.springframework.lang.NonNull;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    private final EventRepository eventRepository;

    @Override
    public EventResponseDTO createEvent(EventRequestDTO request) {
       Event event = new Event();
       event.setTitle(request.getTitle());
       event.setDescription(request.getDescription());
       event.setLocation(request.getLocation());
       event.setEventDate(request.getEventDate());
       event.setCapacity(request.getCapacity());
       event.setCreatedAt(LocalDateTime.now());

       Event savedEvent = eventRepository.save(event);
       return mapToResponse(savedEvent);
    }

    @Override
    public List<EventResponseDTO> getAllEvents() {
       return eventRepository.findAll().stream().map(this::mapToResponse).toList();
    }

    @Override
    public EventResponseDTO getEventById(@NonNull Long id) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new RuntimeException("event not found with id: " + id));
        return mapToResponse(event);
    }

    @Override
    public EventResponseDTO updateEvent(@NonNull Long id, EventRequestDTO request) {
        Event event = eventRepository.findById(id).orElseThrow(()-> new RuntimeException("event not found with id:" + id));
        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());
        event.setLocation(request.getLocation());
        event.setEventDate(request.getEventDate());
        event.setCapacity(request.getCapacity());

        Event updatedEvent= eventRepository.save(event);

        return mapToResponse(updatedEvent);

    }

    @Override
    public void deleteEvent(@NonNull Long id) {
        
    if (!eventRepository.existsById(id)) {
            throw new RuntimeException("event not found with id" + id);
        }
        
        eventRepository.deleteById(id);
    }


    private EventResponseDTO mapToResponse(Event event) {

        EventResponseDTO response = new EventResponseDTO();

        response.setId(event.getId());
        response.setTitle(event.getTitle());
        response.setDescription(event.getDescription());
        response.setLocation(event.getLocation());
        response.setEventDate(event.getEventDate());
        response.setCapacity(event.getCapacity());
        response.setCreatedAt(event.getCreatedAt());

        return response;
    }

}

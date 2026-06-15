package com.example.event.Service;

import java.util.List;

import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;

import org.springframework.lang.NonNull;

public interface EventService {
    EventResponseDTO createEvent(EventRequestDTO request);
    List<EventResponseDTO> getAllEvents();
    EventResponseDTO getEventById(@NonNull Long id);
    EventResponseDTO updateEvent(@NonNull Long id , EventRequestDTO request);
    void deleteEvent(@NonNull Long id);
}

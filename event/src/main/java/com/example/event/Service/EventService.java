package com.example.event.Service;

import java.util.List;

import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;


public interface EventService {
    EventResponseDTO createEvent(EventRequestDTO request);
    List<EventResponseDTO> getAllEvents();
    EventResponseDTO getEventById(long id);
    EventResponseDTO updateEvent( long id , EventRequestDTO request);
    void deleteEvent( long id);
}

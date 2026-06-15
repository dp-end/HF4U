package com.example.event.Controller;

import java.util.List;

import org.springframework.lang.NonNull; // Bunu ekledik
import org.springframework.web.bind.annotation.DeleteMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Service.EventService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {
    private final EventService eventService;

    @PostMapping
    public EventResponseDTO createEvent(@Valid @RequestBody EventRequestDTO request){
        return eventService.createEvent(request);
    }

    @GetMapping
    public List<EventResponseDTO> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public EventResponseDTO getEventById(@PathVariable @NonNull Long id) { // @NonNull eklendi
        return eventService.getEventById(id);
    }

    @PutMapping("/{id}") // Bu anotasyon eksikti, ekledik
    public EventResponseDTO updateEvent(@PathVariable @NonNull Long id , @Valid @RequestBody EventRequestDTO request) { // @NonNull eklendi
        return eventService.updateEvent(id, request);
    }

    @DeleteMapping("/{id}") // Bu anotasyon eksikti, ekledik
    public void deleteEvent(@PathVariable @NonNull Long id){ // @NonNull eklendi
        eventService.deleteEvent(id);
    }
}
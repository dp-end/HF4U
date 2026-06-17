package com.example.event.Controller;

import java.util.List;

import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Service.Event.EventService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {
    private final EventService eventService;

    @PostMapping
    @PostAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<EventResponseDTO> createEvent(@Valid @RequestBody EventRequestDTO request){
        return new ApiResponseDTO<>(true , "event created successfully" ,eventService.createEvent(request));
    }

    @GetMapping
    public ApiResponseDTO <List<EventResponseDTO>> getAllEvents(){
        return new ApiResponseDTO<>(true ,"event fetch successfully" , eventService.getAllEvents());
    }

    @GetMapping("/{id}")
    public ApiResponseDTO <EventResponseDTO> getEventById(@PathVariable Long id) { // @NonNull eklendi
        return new ApiResponseDTO<>(true,"event fetch successfully",eventService.getEventById(id));
    }

    @PutMapping("/{id}") // Bu anotasyon eksikti, ekledik
    @PostAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO <EventResponseDTO> updateEvent(@PathVariable  Long id , @Valid @RequestBody EventRequestDTO request) { // @NonNull eklendi
        return new ApiResponseDTO<>(true ,"event updated successfully", eventService.updateEvent(id, request));
    }

    @DeleteMapping("/{id}")
    @PostAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<String> deleteEvent(
            @PathVariable Long id) {

        eventService.deleteEvent(id);

        return new ApiResponseDTO<>(
                true,
                "Event deleted successfully",
                null
        );
    }
}
package com.example.event.Controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; // Bunu ekledik
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.MyResgistrationResponseDTO;
import com.example.event.Dto.ParticipantResponseDTO;
import com.example.event.Dto.Event.EventRequestDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Service.Event.EventService;
import com.example.event.Service.EventRegistration.EventRegistrationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {
    private final EventService eventService;
    private final EventRegistrationService eventRegistrationService;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<EventResponseDTO> createEvent(@Valid @RequestBody EventRequestDTO request){
        return new ApiResponseDTO<>(true , "Etkinlik başarıyla oluşturuldu" ,eventService.createEvent(request));
    }

    @GetMapping
    public ApiResponseDTO <List<EventResponseDTO>> getAllEvents(){
        return new ApiResponseDTO<>(true ,"Etkinlikler başarıyla getirildi" , eventService.getAllEvents());
    }

    @GetMapping("/{id}")
    public ApiResponseDTO <EventResponseDTO> getEventById(@PathVariable Long id) { // @NonNull eklendi
        return new ApiResponseDTO<>(true,"Etkinlik başarıyla getirildi",eventService.getEventById(id));
    }

    @PutMapping("/{id}") // Bu anotasyon eksikti, ekledik
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO <EventResponseDTO> updateEvent(@PathVariable  Long id , @Valid @RequestBody EventRequestDTO request) { // @NonNull eklendi
        return new ApiResponseDTO<>(true ,"Etkinlik başarıyla güncellendi", eventService.updateEvent(id, request));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<String> deleteEvent(
            @PathVariable Long id) {

        eventService.deleteEvent(id);

        return new ApiResponseDTO<>(
                true,
                "Etkinlik başarıyla silindi",
                null
        );
    }

    @PostMapping("/{eventId}/register")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponseDTO<String> registerToEvent(@PathVariable Long eventId){
        eventRegistrationService.registerToEvent(eventId);
        return new ApiResponseDTO<>(
            true,
            "Kayıt başarıyla tamamlandı",
            null
        );
    }

    @GetMapping("/my-registrations")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponseDTO<List<MyResgistrationResponseDTO>> getMyRegistrations(){
        return new ApiResponseDTO<>(
            true,
            "Kayıtlar başarıyla getirildi",
            eventRegistrationService.getMyRegistrations()
        );
    }

    @GetMapping("/{eventId}/participants")
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<List<ParticipantResponseDTO>> getEventParticipants(@PathVariable long eventId){
        return new ApiResponseDTO<>(
            true,
            "Katılımcılar başarıyla getirildi",
            eventRegistrationService.getEventParticipants(eventId)
        );
    }

    @GetMapping("/my-events")
    @PreAuthorize("hasRole('CLUB_MANAGER')")
    public ApiResponseDTO<List<EventResponseDTO>>getMyEvents(){
        return new ApiResponseDTO<>(
            true,
            "Etkinliklerim başarıyla getirildi",
            eventService.getMyEvents()
        );
    }

    @PutMapping("/{id}/approve")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<EventResponseDTO> approveEvent(@PathVariable long id){
        return new ApiResponseDTO<>(
            true,
            "Etkinlik başarıyla onaylandı",
            eventService.approveEvent(id)
        );
    }

    @PutMapping("/{id}/reject")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<EventResponseDTO> rejectEvent(@PathVariable long id){
        return new ApiResponseDTO<>(
            true,
            "Etkinlik başarıyla reddedildi",
            eventService.rejectEvent(id)
        );
    }


    @GetMapping("/pending")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<List<EventResponseDTO>> getPendingEvents() {
        return new ApiResponseDTO<>(
            true,
            "Onay bekleyen etkinlikler başarıyla getirildi",
            eventService.getPendingEvents()
        );
    }

    @DeleteMapping("/{eventId}/registration")
    @PreAuthorize("hasRole('STUDENT')")
    public ApiResponseDTO<String> cancelRegistration(@PathVariable long eventId){
        eventRegistrationService.cancelRegistration(eventId);
        return new ApiResponseDTO<>(
            true,
            "Kayıt başarıyla iptal edildi",
            null
        );
    }

}

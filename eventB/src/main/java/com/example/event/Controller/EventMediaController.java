package com.example.event.Controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.EventMedia.EventMediaRequestDTO;
import com.example.event.Dto.EventMedia.EventMediaResponseDTO;
import com.example.event.Service.EventMedia.EventMediaService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/events/{eventId}/media")
@RequiredArgsConstructor
public class EventMediaController {

    private final EventMediaService eventMediaService;

    @GetMapping
    public ApiResponseDTO<List<EventMediaResponseDTO>> getEventMedia(@PathVariable Long eventId) {
        return new ApiResponseDTO<>(
                true,
                "Medya başarıyla getirildi",
                eventMediaService.getEventMedia(eventId)
        );
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<EventMediaResponseDTO> addMedia(
            @PathVariable Long eventId,
            @Valid @RequestBody EventMediaRequestDTO request
    ) {
        return new ApiResponseDTO<>(
                true,
                "Medya başarıyla eklendi",
                eventMediaService.addMedia(eventId, request)
        );
    }

    @PutMapping("/{mediaId}")
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<EventMediaResponseDTO> updateMedia(
            @PathVariable Long eventId,
            @PathVariable Long mediaId,
            @Valid @RequestBody EventMediaRequestDTO request
    ) {
        return new ApiResponseDTO<>(
                true,
                "Medya başarıyla güncellendi",
                eventMediaService.updateMedia(eventId, mediaId, request)
        );
    }

    @DeleteMapping("/{mediaId}")
    @PreAuthorize("hasAnyRole('ADMIN','CLUB_MANAGER')")
    public ApiResponseDTO<String> deleteMedia(
            @PathVariable Long eventId,
            @PathVariable Long mediaId
    ) {
        eventMediaService.deleteMedia(eventId, mediaId);

        return new ApiResponseDTO<>(
                true,
                "Medya başarıyla silindi",
                null
        );
    }
}

package com.example.event.Dto.Event;
import java.time.LocalDateTime;
import java.util.List;

import com.example.event.Entity.EventStatus;
import com.example.event.Dto.EventMedia.EventMediaResponseDTO;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EventResponseDTO {
    @NotBlank
    private Long id;
    private String title;
    private String description;
    private String location;
    @Future
    private LocalDateTime eventDate;
    @Min(1)
    private Integer capacity;
    private LocalDateTime createdAt;
    private EventStatus eventStatus;
    private String category;
    private String coverImageUrl;
    private String clubName;
    private long registeredCount;
    private long availableSpots;
    private List<EventMediaResponseDTO> media;
}

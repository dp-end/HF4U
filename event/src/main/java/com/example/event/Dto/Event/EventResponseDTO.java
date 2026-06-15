package com.example.event.Dto.Event;
import java.time.LocalDateTime;

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
}

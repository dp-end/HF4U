package com.example.event.Dto.Event;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EventRequestDTO {
    @NotBlank(message = "title cannot be empty")
    private String title;
    private String description;
    @NotBlank(message = "location cannot be empty")
    private String location;
    @Future(message = "event date must be in the futures")
    private LocalDateTime eventDate;
    @Min(value = 1 ,message = "capacity must be greater than 0")
    private Integer capacity;
    private String category;
    private String coverImageUrl;
}

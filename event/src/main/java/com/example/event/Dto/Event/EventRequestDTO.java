package com.example.event.Dto.Event;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EventRequestDTO {
    private String title;
    private String description;
    private String location;
    private LocalDateTime eventDate;
    private Integer capacity;
}

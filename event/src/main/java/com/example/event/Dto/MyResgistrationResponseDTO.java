package com.example.event.Dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyResgistrationResponseDTO {
    private long eventId;
    private String title;
    private String location;
    private LocalDateTime eventDate;
}

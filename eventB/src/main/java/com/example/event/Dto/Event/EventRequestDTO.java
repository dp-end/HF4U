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
    @NotBlank(message = "Başlık boş olamaz")
    private String title;
    private String description;
    @NotBlank(message = "Konum boş olamaz")
    private String location;
    @Future(message = "Etkinlik tarihi gelecekte olmalı")
    private LocalDateTime eventDate;
    @Min(value = 1 ,message = "Kontenjan 0'dan büyük olmalı")
    private Integer capacity;
    private String category;
    private String coverImageUrl;
}

package com.example.event.Dto.EventMedia;

import com.example.event.Entity.MediaType;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventMediaRequestDTO {

    @NotBlank(message = "Medya URL boş olamaz")
    private String mediaUrl;

    @NotNull(message = "Medya tipi boş olamaz")
    private MediaType mediaType;

    @NotNull(message = "Sıra değeri boş olamaz")
    @Min(value = 0, message = "Sıra değeri negatif olamaz")
    private Integer orderIndex;
}

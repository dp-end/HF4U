package com.example.event.Dto.EventMedia;

import java.time.LocalDateTime;

import com.example.event.Entity.MediaType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventMediaResponseDTO {
    private Long id;
    private String mediaUrl;
    private MediaType mediaType;
    private Integer orderIndex;
    private LocalDateTime createdAt;
}

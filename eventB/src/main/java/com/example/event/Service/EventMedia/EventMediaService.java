package com.example.event.Service.EventMedia;

import java.util.List;

import com.example.event.Dto.EventMedia.EventMediaRequestDTO;
import com.example.event.Dto.EventMedia.EventMediaResponseDTO;

public interface EventMediaService {
    EventMediaResponseDTO addMedia(Long eventId, EventMediaRequestDTO request);

    List<EventMediaResponseDTO> getEventMedia(Long eventId);

    EventMediaResponseDTO updateMedia(Long eventId, Long mediaId, EventMediaRequestDTO request);

    void deleteMedia(Long eventId, Long mediaId);
}

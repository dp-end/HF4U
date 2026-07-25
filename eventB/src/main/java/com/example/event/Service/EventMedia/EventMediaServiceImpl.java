package com.example.event.Service.EventMedia;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.event.Dto.EventMedia.EventMediaRequestDTO;
import com.example.event.Dto.EventMedia.EventMediaResponseDTO;
import com.example.event.Entity.Event;
import com.example.event.Entity.EventMedia;
import com.example.event.Entity.Role;
import com.example.event.Entity.User;
import com.example.event.Exception.miniExceptions.ResourceNotFoundException;
import com.example.event.Exception.miniExceptions.UnauthorizedEventAccessException;
import com.example.event.Repository.EventMediaRepository;
import com.example.event.Repository.EventRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventMediaServiceImpl implements EventMediaService {

    private final EventRepository eventRepository;
    private final EventMediaRepository eventMediaRepository;

    @Override
    public EventMediaResponseDTO addMedia(Long eventId, EventMediaRequestDTO request) {
        Event event = getEvent(eventId);
        checkManagePermission(event);

        EventMedia media = new EventMedia();
        media.setEvent(event);
        media.setMediaUrl(request.getMediaUrl());
        media.setMediaType(request.getMediaType());
        media.setOrderIndex(request.getOrderIndex());
        media.setCreatedAt(LocalDateTime.now());

        return mapToResponse(eventMediaRepository.save(media));
    }

    @Override
    public List<EventMediaResponseDTO> getEventMedia(Long eventId) {
        Event event = getEvent(eventId);

        return eventMediaRepository.findByEventOrderByOrderIndexAsc(event)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public EventMediaResponseDTO updateMedia(Long eventId, Long mediaId, EventMediaRequestDTO request) {
        Event event = getEvent(eventId);
        checkManagePermission(event);

        EventMedia media = eventMediaRepository.findByEventAndId(event, mediaId)
                .orElseThrow(() -> new ResourceNotFoundException("Medya bulunamadı"));

        media.setMediaUrl(request.getMediaUrl());
        media.setMediaType(request.getMediaType());
        media.setOrderIndex(request.getOrderIndex());

        return mapToResponse(eventMediaRepository.save(media));
    }

    @Override
    public void deleteMedia(Long eventId, Long mediaId) {
        Event event = getEvent(eventId);
        checkManagePermission(event);

        EventMedia media = eventMediaRepository.findByEventAndId(event, mediaId)
                .orElseThrow(() -> new ResourceNotFoundException("Medya bulunamadı"));

        eventMediaRepository.delete(media);
    }

    private Event getEvent(Long eventId) {
        return eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Etkinlik bulunamadı"));
    }

    private void checkManagePermission(Event event) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        boolean isAdmin = currentUser.getRole() == Role.ADMIN;
        boolean isOwner = event.getCreatedBy() != null
                && Objects.equals(event.getCreatedBy().getId(), currentUser.getId());

        if (!isAdmin && !isOwner) {
            throw new UnauthorizedEventAccessException("Bu etkinliğin medyasını yönetemezsin");
        }
    }

    private EventMediaResponseDTO mapToResponse(EventMedia media) {
        EventMediaResponseDTO response = new EventMediaResponseDTO();
        response.setId(media.getId());
        response.setMediaUrl(media.getMediaUrl());
        response.setMediaType(media.getMediaType());
        response.setOrderIndex(media.getOrderIndex());
        response.setCreatedAt(media.getCreatedAt());
        return response;
    }
}

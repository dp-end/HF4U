package com.example.event.Service.EventRegistration;
import com.example.event.Dto.MyResgistrationResponseDTO;
import com.example.event.Dto.ParticipantResponseDTO;

import java.util.List;

public interface EventRegistrationService {
    void registerToEvent(long eventId);
    List<MyResgistrationResponseDTO> getMyRegistrations();
    List<ParticipantResponseDTO> getEventParticipants(long eventId);
    void cancelRegistration(long eventId);
}

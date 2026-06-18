package com.example.event.Service.EventRegistration;
import com.example.event.Dto.MyResgistrationResponseDTO;

import java.util.List;

public interface EventRegistrationService {
    void registerToEvent(long eventId);
    List<MyResgistrationResponseDTO> getMyRegistrations();
}

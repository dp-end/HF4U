package com.example.event.Service.Admin;

import java.util.List;

import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Dto.User.UserResponseDTO;

public interface AdminManagementService {
    List<UserResponseDTO> getUsers();
    List<EventResponseDTO> getEvents();
}

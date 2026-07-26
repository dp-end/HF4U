package com.example.event.Service.Admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Dto.User.UserResponseDTO;
import com.example.event.Entity.User;
import com.example.event.Repository.UserRepository;
import com.example.event.Service.Event.EventService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminManagementServiceImpl implements AdminManagementService {

    private final UserRepository userRepository;
    private final EventService eventService;

    @Override
    public List<UserResponseDTO> getUsers() {
        return userRepository.findAll().stream()
                .map(this::mapUserToResponse)
                .toList();
    }

    @Override
    public List<EventResponseDTO> getEvents() {
        return eventService.getAdminEvents();
    }

    private UserResponseDTO mapUserToResponse(User user) {
        UserResponseDTO response = new UserResponseDTO();
        response.setId(user.getId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setCreateAt(user.getCreatAt());
        return response;
    }
}

package com.example.event.Controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.DashboardResponseDTO;
import com.example.event.Dto.Event.EventResponseDTO;
import com.example.event.Dto.User.UserResponseDTO;
import com.example.event.Service.Admin.AdminManagementService;
import com.example.event.Service.Dashboard.DashboardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class DashboardController {
    private final DashboardService dashboardService;
    private final AdminManagementService adminManagementService;

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<DashboardResponseDTO> getDashboard(){
        return new ApiResponseDTO<>(
            true,
            "Panel bilgileri başarıyla getirildi",
            dashboardService.getDashboard()
        );
    }

    @GetMapping("/events")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<List<EventResponseDTO>> getAdminEvents(){
        return new ApiResponseDTO<>(
            true,
            "Etkinlikler başarıyla getirildi",
            adminManagementService.getEvents()
        );
    }

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<List<UserResponseDTO>> getAdminUsers(){
        return new ApiResponseDTO<>(
            true,
            "Kullanıcılar başarıyla getirildi",
            adminManagementService.getUsers()
        );
    }
}

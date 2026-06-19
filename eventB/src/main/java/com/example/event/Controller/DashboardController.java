package com.example.event.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.DashboardResponseDTO;
import com.example.event.Service.Dashboard.DashboardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public ApiResponseDTO<DashboardResponseDTO> getDashboard(){
        return new ApiResponseDTO<>(
            true,
            "Dashboard fetched successfully",
            dashboardService.getDashboard()
        );
    }
}

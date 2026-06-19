package com.example.event.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DashboardResponseDTO {
    private long totalUsers;
    private long totalEvents;
    private long pendingEvents;
    private long approvedEvents;
    private long rejectedEvents;
    private long totalRegistrations;
}

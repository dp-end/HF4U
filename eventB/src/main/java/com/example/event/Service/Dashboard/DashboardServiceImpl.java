package com.example.event.Service.Dashboard;

import org.springframework.stereotype.Service;

import com.example.event.Dto.DashboardResponseDTO;
import com.example.event.Entity.EventStatus;
import com.example.event.Repository.EventRegistrationRepository;
import com.example.event.Repository.EventRepository;
import com.example.event.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    private final EventRepository eventRepository;
    private final EventRegistrationRepository eventRegistrationRepository;


    @Override
    public DashboardResponseDTO getDashboard() {
      DashboardResponseDTO dto = new DashboardResponseDTO();
      dto.setTotalUsers(userRepository.count());
      dto.setTotalEvents(eventRepository.count());
      dto.setPendingEvents(eventRepository.countByStatus(EventStatus.PENDING));
      dto.setRejectedEvents(eventRepository.countByStatus(EventStatus.REJECTED));
      dto.setApprovedEvents(eventRepository.countByStatus(EventStatus.REJECTED));
      dto.setTotalRegistrations(eventRegistrationRepository.count());
      return dto;
    }
    
}

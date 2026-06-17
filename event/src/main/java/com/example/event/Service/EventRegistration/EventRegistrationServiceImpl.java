package com.example.event.Service.EventRegistration;

import org.springframework.stereotype.Service;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventRegistration;
import com.example.event.Entity.User;
import com.example.event.Exception.AlreadyRegisteredException;
import com.example.event.Exception.EventCapacityFullException;
import com.example.event.Exception.ResourceNotFoundException;
import com.example.event.Repository.EventRegistrationRepository;
import com.example.event.Repository.EventRepository;

import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Service
@RequiredArgsConstructor
public class EventRegistrationServiceImpl implements EventRegistrationService {

    private final EventRegistrationRepository eventRegistrationRepository;
    private final EventRepository eventRepository;


    @Override
    public void registerToEvent(long eventId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    User student = (User) authentication.getPrincipal();

    Event event = eventRepository.findById(eventId).orElseThrow(
        ()-> new ResourceNotFoundException("Event not found with id :" + eventId)
    );
    
    if(eventRegistrationRepository.existsByStudentAndEvent(student, event)){
        throw new AlreadyRegisteredException("You are already registered for this event");
    }

    long currentParticipants = eventRegistrationRepository.countByEvent(event);

    if(currentParticipants >= event.getCapacity()) {
        throw new EventCapacityFullException("Event capacity is full");
    }

    EventRegistration registration = new EventRegistration();
    registration.setStudent(student);
    registration.setEvent(event);
    registration.setRegisteredAt(LocalDateTime.now());

    eventRegistrationRepository.save(registration);

    }
    
}

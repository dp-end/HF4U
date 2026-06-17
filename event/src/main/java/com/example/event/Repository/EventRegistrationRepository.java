package com.example.event.Repository;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventRegistration;
import com.example.event.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRegistrationRepository extends JpaRepository<EventRegistration , Long>{
    
    boolean existsByStudentAndEvent(User student, Event event);

    long countByEvent(Event event);

}

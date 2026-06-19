package com.example.event.Repository;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventRegistration;
import com.example.event.Entity.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRegistrationRepository extends JpaRepository<EventRegistration , Long>{
    
    boolean existsByStudentAndEvent(User student, Event event);
    long countByEvent(Event event);
    List<EventRegistration> findByStudent(User student);
    List<EventRegistration> findByEvent(Event event);
    Optional<EventRegistration> findByStudentAndEvent(User student , Event event);

}

package com.example.event.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.event.Entity.Event;
import com.example.event.Entity.EventStatus;
import com.example.event.Entity.User;

import java.util.List;


// Repository arayüzünüz
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByCreatedBy(User createdBy);
    List<Event> findByStatus(EventStatus eventStatus);
    long countByStatus(EventStatus eventStatus);
}
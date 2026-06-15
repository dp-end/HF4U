package com.example.event.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.event.Entity.Event;;

// Repository arayüzünüz
public interface EventRepository extends JpaRepository<Event, Long> {
    
}
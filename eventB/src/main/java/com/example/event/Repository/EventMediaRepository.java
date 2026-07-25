package com.example.event.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.event.Entity.Event;
import com.example.event.Entity.EventMedia;

public interface EventMediaRepository extends JpaRepository<EventMedia, Long> {
    List<EventMedia> findByEventOrderByOrderIndexAsc(Event event);

    Optional<EventMedia> findByEventAndId(Event event, Long id);

    boolean existsByEventAndId(Event event, Long id);
}

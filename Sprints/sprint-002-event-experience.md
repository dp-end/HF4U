# Sprint 002 — Event Experience

**Duration:** 2 Days

---

# Sprint Goal

Allow students to interact with events.

Instead of only seeing event cards, users should be able to open event details and register.

---

# Business Goal

Students should be able to:

- Open event details
- Read descriptions
- View event information
- Register
- Receive feedback

---

# Backend

Use existing APIs.

GET /api/events/{id}

POST /api/event-registrations

---

# Frontend Tasks

## Event Detail

Create a dedicated detail page.

Display

- [ ] Cover Image Placeholder
- [ ] Title
- [ ] Description
- [ ] Date
- [ ] Location
- [ ] Capacity
- [ ] Organizer
- [ ] Status Badge

---

## Registration

- [ ] Register Button
- [ ] Disable button after registration
- [ ] Success Toast
- [ ] Error Toast
- [ ] Loading Indicator

---

## Navigation

- [ ] Feed → Detail
- [ ] Detail → Feed

---

## Shared Components

- [ ] Badge
- [ ] Toast
- [ ] Dialog

---

# Technical Rules

No business logic inside components.

Use services.

Strong typing everywhere.

Signals for state.

---

# Definition of Done

Student can

Feed

↓

Open Detail

↓

Register

↓

Receive confirmation

without page reload.

---

# Deliverable

Working event detail experience connected to backend.
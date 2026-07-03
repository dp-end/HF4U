# Sprint 001 — Student Discovery Feed

**Duration:** 2 Days

**Sprint Goal**

Build the first version of the Student Feed.

Students should no longer see a boring list of events.
Instead, they should experience a modern event discovery page inspired by social media platforms.

---

# Business Goal

A student should be able to:

- Login
- Discover approved events
- Browse events comfortably
- Search events
- Enjoy a modern UI

The application should begin feeling like a real product instead of a university information system.

---

# Backend

No backend changes are required.

Use existing APIs.

Endpoints

GET /api/events

---

# Frontend Tasks

## Project Cleanup

- [ ] Remove remaining `any` types
- [ ] Ensure every service is strongly typed
- [ ] Review folder structure
- [ ] Verify Signals usage

---

## Shared Components

Create reusable components.

- [ ] Navbar
- [ ] Event Card
- [ ] Search Bar
- [ ] Category Filter
- [ ] Empty State
- [ ] Loading Skeleton

---

## Student Feed

- [ ] Landing Page
- [ ] Featured Event
- [ ] Event Feed
- [ ] Responsive Layout
- [ ] Search Input
- [ ] Category Chips (Static)

---

## UI

Follow the provided Figma inspiration.

Requirements

- Large event cards
- Modern spacing
- Rounded corners
- Responsive
- Soft shadows
- Minimal design

---

# Technical Rules

- Use Angular Signals.
- Use standalone components.
- Use reusable components.
- Do not use any.
- Use ApiResponse<T>.
- No duplicated CSS.

---

# Definition of Done

Student can:

✅ Login

✅ See event feed

✅ Search events

✅ Browse responsive cards

All data comes from backend.

No mock data.

---

# Deliverable

A modern Student Feed connected to the Spring Boot backend.
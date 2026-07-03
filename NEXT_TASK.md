# NEXT TASK

> Current Sprint: Student Experience MVP

---

# Current Goal

Build the first usable version of the Student experience.

The backend core is mostly completed.

The current focus is creating a modern, social-media-inspired frontend connected to the existing Spring Boot backend.

The UI should follow the provided Figma designs while adapting them to the UniEvents product vision.

---

# Current Status

## Backend

✅ Authentication

✅ JWT

✅ Register

✅ Login

✅ Role Authorization

✅ Event CRUD

✅ Event Approval

✅ Event Registration

✅ Cancel Registration

✅ My Registrations

---

## Frontend

✅ Angular 21 Project

✅ Authentication

✅ JWT Storage

✅ Auth Interceptor

✅ Auth Guard

✅ Role Guard

✅ Login Page

✅ EventService

✅ Signals

✅ Student can fetch events from backend

---

# Current Sprint

Sprint 1

Goal:

Create the Student Feed.

---

# Tasks

## 1. Project Cleanup

Priority: High

- [ ] Remove remaining "any" types
- [ ] Strongly type every API response
- [ ] Review folder structure
- [ ] Rename inconsistent files if necessary
- [ ] Create reusable UI components folder

---

## 2. Shared Components

Priority: High

Create reusable components.

- [ ] Navbar
- [ ] Event Card
- [ ] Button
- [ ] Badge
- [ ] Empty State
- [ ] Loading Component
- [ ] Search Bar
- [ ] Category Chips

Nothing should be duplicated.

---

## 3. Student Feed

Priority: Highest

Build the landing page.

Requirements

- [ ] Hero section
- [ ] Featured Event
- [ ] Search
- [ ] Categories
- [ ] Infinite scrolling layout
- [ ] Responsive cards
- [ ] Modern animations

Backend Endpoint

GET /api/events

---

## 4. Event Card

Every card should display

- Cover Image
- Title
- Description
- Location
- Date
- Capacity
- Status
- Register Button

Cards should support future image galleries.

---

## 5. Event Detail

Create event detail page.

Requirements

- [ ] Hero Image
- [ ] Image Carousel
- [ ] Description
- [ ] Location
- [ ] Date
- [ ] Capacity
- [ ] Register Button

Backend Endpoint

GET /api/events/{id}

---

## 6. Registration

Requirements

- [ ] Register button
- [ ] Success feedback
- [ ] Error feedback
- [ ] Prevent duplicate registrations

Backend Endpoint

POST /api/event-registrations

---

## 7. My Registrations

Requirements

- [ ] Registered Events
- [ ] Cancel Registration
- [ ] Empty State

Backend Endpoints

GET /api/event-registrations/my

DELETE /api/event-registrations/{id}

---

# Coding Rules

Always

✅ Use Signals

✅ Use Interfaces

✅ Use ApiResponse<T>

✅ Use reusable components

✅ Keep components small

Never

❌ Use any

❌ Put business logic inside components

❌ Duplicate UI

---

# UI Rules

The project should NOT look like a university information system.

The experience should feel like a modern product.

Inspired by

- Instagram
- TikTok
- Linear
- Notion
- Stripe Dashboard

The user should discover events instead of reading long tables.

---

# Future Considerations

Do NOT implement yet.

These belong to future sprints.

- Media Upload
- Multiple Images
- Video Support
- Club Profiles
- Follow Clubs
- Notifications
- AI Recommendations
- Analytics

---

# Definition of Done

This sprint is complete when

- Student can login
- Student sees modern event feed
- Student can open event detail
- Student can register
- Student can cancel registration
- UI is responsive
- No "any" types remain
- Components are reusable
- Backend and frontend are fully connected

---

# Next Sprint Preview

Sprint 2

Goal

Transform events into media-rich content.

Features

- Event Images

- Event Videos

- Gallery

- Carousel

- Swipe Experience

- Media Upload

Backend

EventMedia Entity

Frontend

Media Components

Carousel

Image Viewer

Video Player
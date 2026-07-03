# UniEvents Architecture

> Technical Architecture Documentation

---

# Project Overview

UniEvents is a full-stack web application.

The project consists of two independent applications.

```
exercise/

├── EventB/     -> Spring Boot Backend

├── EventF/     -> Angular Frontend

├── PROJECT_CONTEXT.md

├── ROADMAP.md

├── NEXT_TASK.md

└── ARCHITECTURE.md
```

Both applications should evolve together.

Backend exposes REST APIs.

Frontend consumes APIs.

---

# Backend Architecture

The backend follows Clean Layered Architecture.

```
Controller

↓

Service

↓

Repository

↓

Database
```

Controllers should NEVER contain business logic.

Repositories should NEVER be accessed directly from Controllers.

All business logic belongs inside Services.

---

## Backend Folder Structure

```
controller/

service/

repository/

entity/

dto/

mapper/

config/

security/

exception/

enums/

util/
```

---

# Entity Rules

Entities represent database tables only.

Entities should NOT be returned directly from controllers.

Always use DTOs.

Example

```
Event

↓

EventResponseDTO
```

---

# DTO Rules

Every request and response should use DTOs.

Example

```
LoginRequestDTO

LoginResponseDTO

EventRequestDTO

EventResponseDTO

RegistrationResponseDTO
```

Never expose Entity objects.

---

# API Response Standard

Every endpoint returns

```json
{
    "success": true,
    "message": "Success",
    "data": {}
}
```

Frontend should always expect this format.

---

# Authentication

JWT Authentication.

Flow

```
Login

↓

JWT Generated

↓

Frontend stores token

↓

Authorization Header

↓

JWT Filter

↓

Authenticated User
```

---

# Authorization

Three roles exist.

```
STUDENT

CLUB_MANAGER

ADMIN
```

Permissions

Student

- Register
- Browse Events

Club

- Manage Own Events

Admin

- Manage Platform

---

# Frontend Architecture

Angular 21

Standalone Components

Signals

RxJS

SCSS

---

# Frontend Folder Structure

```
src/app

core/

shared/

features/
```

---

## core

Contains application logic.

```
core/

services/

guards/

interceptors/

models/

utils/
```

---

## shared

Contains reusable UI components.

```
shared/

navbar/

sidebar/

button/

badge/

dialog/

loading/

empty-state/

search/

carousel/

event-card/
```

Everything inside shared should be reusable.

---

## features

Business pages.

```
features/

auth/

student/

club/

admin/
```

---

# Student Module

```
student/

home/

event-detail/

my-registrations/

profile/
```

---

# Club Module

```
club/

dashboard/

create-event/

edit-event/

my-events/

participants/
```

---

# Admin Module

```
admin/

dashboard/

pending-events/

users/

reports/
```

---

# Services

Every entity should have its own service.

Example

```
AuthService

EventService

RegistrationService

ClubService

AdminService
```

Never put HTTP requests inside Components.

---

# Models

Every API object must have an interface.

Example

```
Event

User

Registration

ApiResponse<T>

DashboardStats
```

Never use any.

---

# API Calls

Good

```typescript
getAllEvents(): Observable<ApiResponse<Event[]>>
```

Bad

```typescript
http.get(...)
```

Always use typed responses.

---

# State Management

Angular Signals are preferred.

Use

```
signal()

computed()

effect()
```

Avoid manual ChangeDetectorRef.

---

# Routing

```
Login

↓

Student

Club

Admin
```

Use

AuthGuard

RoleGuard

---

# Components

Components should stay small.

Maximum responsibility:

One feature.

Example

Good

```
Navbar

EventCard

SearchBar

CategoryFilter

HeroBanner
```

Bad

```
HomeComponent

(1000 lines)
```

---

# Styling

Use SCSS.

Never use inline styles.

Prefer component-scoped styles.

Keep spacing consistent.

8px grid system.

---

# Naming Convention

Services

```
EventService
```

Interfaces

```
Event
```

Components

```
StudentHomeComponent
```

Methods

```
createEvent()

updateEvent()

deleteEvent()

registerToEvent()
```

Variables

camelCase

Classes

PascalCase

---

# Error Handling

Backend

GlobalExceptionHandler

↓

ApiResponse

↓

Frontend

Toast Notification

Never expose stack traces.

---

# Logging

Backend

Use logger.

Avoid System.out.println()

Frontend

Use console.log only during development.

Remove unnecessary logs before release.

---

# Media Architecture (Future)

Current

```
Event
```

Future

```
Event

↓

EventMedia

↓

Photo

Video

Poster
```

One Event

↓

Many Media

---

# Database Direction

Current

```
User

Role

Event

Registration
```

Future

```
EventMedia

ClubProfile

Follow

Notification

Favorite

Analytics
```

---

# UI Philosophy

The application should NOT feel like a university ERP.

Instead,

it should feel like

Instagram

TikTok

Spotify

Linear

Modern SaaS.

---

# Feed Architecture

Students should consume content.

Vertical Scroll

↓

Events

↓

Events

↓

Events

Each Event

↓

Horizontal Media Swipe

This is one of the core product ideas.

---

# Performance Rules

Always

Lazy Loading

Image Optimization

Signals

Reusable Components

Code Splitting

Pagination

Infinite Scroll

Avoid

Duplicated Components

Duplicated CSS

Huge Components

Business Logic inside Components

---

# Coding Standards

Always

✔ TypeScript Strict

✔ Strong Typing

✔ Interfaces

✔ DTOs

✔ Signals

✔ ApiResponse

✔ Reusable Components

Never

❌ any

❌ Business logic inside UI

❌ Duplicate code

❌ Huge components

---

# Future Architecture

Current

```
Student

↓

Event

↓

Register
```

Future

```
Student

↓

Feed

↓

Media

↓

Club

↓

Follow

↓

Notification

↓

Recommendation Engine

↓

AI
```

The architecture should always support future expansion.

---

# Final Principle

UniEvents is NOT being developed as a university assignment.

It is being developed as a scalable real-world product.

Every architectural decision should prioritize:

- Maintainability
- Scalability
- Reusability
- Performance
- Clean Code
- Great User Experience
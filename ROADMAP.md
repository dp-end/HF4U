# UniEvents Roadmap

> Product Development Roadmap

---

# Current Version

Version: MVP (0.1)

Current Status:

🟢 Backend Core Completed

🟡 Frontend Development Started

---

# Product Goal

UniEvents is a social-media-inspired university event discovery platform.

The project is NOT a traditional Event Management System.

The goal is to make discovering university events as enjoyable as browsing Instagram or TikTok.

Students should discover campus life through rich multimedia content.

---

# Development Strategy

Development will be completed in multiple phases.

Each phase should be fully functional before moving to the next one.

Never start a new phase before completing the current one.

---

# Phase 1 — Core Platform

Status

🟢 In Progress

Goal

Build a complete working event platform.

---

## Backend

### Authentication

- [x] JWT Authentication
- [x] Login
- [x] Register
- [x] BCrypt Password Encoding
- [x] Security Configuration
- [x] JWT Filter
- [x] Role Authorization

---

### User Roles

- [x] Student
- [x] Club Manager
- [x] Administrator

---

### Event

- [x] Create Event
- [x] Update Event
- [x] Delete Event
- [x] Event Detail
- [x] Event List

---

### Registration

- [x] Register Event
- [x] Cancel Registration
- [x] My Registrations

---

### Event Approval

- [x] Pending
- [x] Approve
- [x] Reject

---

### Exception Handling

- [x] Global Exception Handler
- [x] Custom Exceptions
- [x] ApiResponse

---

## Frontend

### Authentication

- [x] Login
- [ ] Register
- [x] JWT Storage
- [x] Logout
- [x] Auth Guard
- [x] Role Guard
- [x] HTTP Interceptor

---

### Student

- [x] Fetch Events
- [ ] Student Feed UI
- [ ] Event Detail
- [ ] Register Button
- [ ] Cancel Registration
- [ ] My Registrations

---

### Club

- [ ] Dashboard
- [ ] Create Event
- [ ] Edit Event
- [ ] Delete Event
- [ ] My Events
- [ ] Participants

---

### Admin

- [ ] Dashboard
- [ ] Pending Events
- [ ] Approve
- [ ] Reject
- [ ] Manage Events

---

# Phase 2 — Media Platform

Status

⚪ Planned

Goal

Turn events into rich multimedia content.

---

## Backend

### Event Media

New Entity

EventMedia

Fields

- id
- eventId
- mediaUrl
- mediaType
- orderIndex

Media Types

- IMAGE
- VIDEO

---

### Storage

Initially

- Local Storage

Future

- AWS S3
- Cloudinary

---

### API

Upload Media

Delete Media

Update Media

Reorder Media

---

## Frontend

### Event Card

Support

- Hero Image
- Gallery
- Swipe
- Video

---

### Event Detail

Support

- Image Slider
- Video Player
- Poster Preview

---

# Phase 3 — Social Platform

Status

⚪ Planned

Goal

Turn clubs into content creators.

---

## Backend

Club Profile

Follow System

Notification

Favorites

---

## Frontend

Club Profile

Club Feed

Follow Button

Favorite Events

Notifications

Profile Page

---

# Phase 4 — Discovery

Status

⚪ Planned

Goal

Students should discover events instead of searching for them.

---

## Features

Trending Events

Popular Events

Recommended Events

Recently Added

Nearby Events

Category Feed

Infinite Scroll

---

# Phase 5 — Smart Platform

Status

⚪ Planned

Goal

AI powered event recommendations.

---

## AI

Recommendations

Interest Analysis

Category Prediction

Smart Feed Ranking

---

## Analytics

Most Viewed Events

Most Registered Events

Club Statistics

User Activity

Heatmaps

---

# UI Roadmap

---

## Shared Components

Navbar

Sidebar

Footer

Search Bar

Category Chips

Event Card

Hero Card

Badge

Button

Loading

Empty State

Modal

Dialog

Toast

Pagination

Carousel

Media Viewer

---

## Student Pages

Login

Register

Home Feed

Event Detail

My Registrations

Profile

Settings

---

## Club Pages

Dashboard

Create Event

My Events

Participants

Statistics

Profile

---

## Admin Pages

Dashboard

Pending Events

Users

Events

Reports

Settings

---

# Database Roadmap

Current

User

Role

Event

Registration

Future

Media

ClubProfile

Follow

Notification

Comment

Favorite

Analytics

---

# API Roadmap

Authentication API

Student API

Club API

Admin API

Media API

Notification API

Analytics API

Recommendation API

---

# Mobile Support

Responsive Layout

Tablet Support

Mobile Navigation

Gesture Support

Swipe Experience

---

# UX Goals

Students should:

- Never read boring tables.
- Discover events naturally.
- Scroll instead of searching.
- Consume event content quickly.

Clubs should:

- Easily promote events.
- Upload rich media.
- Reach more students.

Admins should:

- Manage platform efficiently.
- Approve content quickly.
- Monitor platform statistics.

---

# Performance Goals

Lazy Loading

Image Optimization

Video Optimization

Pagination

Infinite Scroll

Signal-based Rendering

Code Splitting

Caching

---

# Long-Term Vision

UniEvents should become the central digital campus platform.

Instead of simply managing events, it should encourage students to participate in university life through engaging multimedia content.

The experience should feel closer to Instagram or TikTok than a traditional university portal.

---

# Success Criteria

The project is considered successful when:

✓ Students enjoy browsing events.

✓ Clubs actively publish media-rich content.

✓ Event participation increases.

✓ The UI feels modern and responsive.

✓ The platform is scalable.

✓ Backend follows clean architecture.

✓ Frontend follows reusable component architecture.

✓ The project is production-ready.
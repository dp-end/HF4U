# UniEvents

> Social Media Inspired Campus Event Discovery Platform

---

# Project Vision

UniEvents is **NOT** a traditional Event Management System.

The goal is **not** simply creating and managing events.

The goal is to build a **social-media-inspired platform** where university clubs create rich multimedia content and students discover campus life through an engaging scrolling experience.

Think about:

- Instagram
- TikTok
- Eventbrite
- LinkedIn Events

combined into a single university platform.

Instead of boring tables and long event lists, students should discover events naturally by scrolling.

The platform should encourage participation through media-rich content.

---

# Problem Statement

Current university event systems are outdated.

Typical flow:

Club
↓

Creates Event

↓

Students see long boring tables

↓

Nobody reads

↓

Low participation

---

Our solution:

Club creates beautiful event content.

Students discover events by scrolling.

Students interact with events exactly like social media.

---

# Core Philosophy

Events are content.

Clubs are creators.

Students are consumers.

Media comes first.

Text comes second.

Discovery is more important than management.

---

# Main Roles

## Student

Students can:

- Register
- Login
- Discover events
- View media
- Register to events
- Cancel registration
- View registrations
- Follow clubs (future)
- Receive notifications (future)

Students CANNOT:

- Create events
- Edit events
- Approve events

---

## Club Manager

Every club has its own account.

Club Managers can:

- Create events
- Upload photos
- Upload videos
- Edit own events
- Delete own events
- View participants
- View statistics

Club Managers CANNOT:

- Edit other clubs' events
- Approve events

Every new event starts as:

PENDING

---

## Administrator

Admin manages the platform.

Admin can:

- Approve events
- Reject events
- Delete any event
- Manage users
- View analytics

---

# Product Direction

This project should feel like:

Campus Instagram

rather than

University ERP.

Students should enjoy discovering events.

---

# Technology Stack

Frontend

- Angular 21
- Standalone Components
- Angular Signals
- SCSS
- RxJS
- JWT Authentication

Backend

- Spring Boot
- Spring Security
- JWT
- Spring Data JPA
- MySQL

---

# Backend Architecture

Controller

↓

Service

↓

Repository

↓

Database

Never access repositories directly from controllers.

Business logic always belongs inside Service layer.

---

# Current Backend

Implemented

✓ JWT Authentication

✓ Login

✓ Register

✓ Role System

✓ Event CRUD

✓ Event Registration

✓ Event Approval

✓ Role Authorization

✓ ApiResponse

✓ Exception Handling

---

# Frontend Architecture

src/

app/

core/

shared/

features/

---

core

Contains:

services

guards

interceptors

models

utilities

---

shared

Reusable UI components

Examples:

Navbar

Sidebar

Event Card

Badge

Loading Spinner

Dialog

Button

Input

Search

---

features

Contains business pages.

Student

Club

Admin

Auth

---

# Models

Use interfaces.

Never use "any".

Example:

Event

User

Registration

DashboardStats

ApiResponse<T>

---

# Services

Services must be strongly typed.

Bad

http.get(url)

Good

http.get<ApiResponse<Event[]>>(url)

---

# State Management

Angular Signals should be preferred.

Avoid manual ChangeDetectorRef whenever possible.

Use:

signal()

computed()

effect()

instead.

---

# Authentication

JWT Authentication.

Store:

token

role

fullName

inside localStorage.

Use AuthInterceptor.

---

# Routing

Role Based.

Student

Club

Admin

must have separate dashboards.

Use:

AuthGuard

RoleGuard

---

# API Response Standard

Every endpoint returns:

{
  success,
  message,
  data
}

Never return raw entities.

Always use DTOs.

---

# Event Lifecycle

Club creates event

↓

Status = PENDING

↓

Admin approves

↓

Status = APPROVED

↓

Visible inside Student Feed

↓

Students register

↓

Event completed

---

# Future Event Model

Current

Event

↓

Title

Description

Location

Date

Capacity

Status

---

Future

Event

↓

Media

↓

Photos

Videos

Poster

Thumbnail

---

Media should become first-class citizen.

---

# Future Entities

Event

Registration

Media

ClubProfile

Follow

Notification

Comment

Analytics

---

# UI Philosophy

Never build boring tables.

Everything should feel modern.

Inspired by:

Instagram

TikTok

Linear

Notion

Stripe Dashboard

---

# Student Feed

Students should scroll vertically.

Every event card should occupy large space.

Cards should contain:

Hero image

Title

Location

Date

Capacity

Register button

Swipeable gallery

---

# Media Experience

Every event may contain:

Multiple photos

Videos

Poster

Gallery

Users should swipe horizontally inside event.

Users scroll vertically between events.

Exactly like TikTok + Instagram.

---

# MVP

Version 1

Authentication

Event Feed

Event Detail

Register

My Registrations

Club Dashboard

Create Event

Admin Approval

---

# Version 2

Media Upload

Multiple Images

Videos

Club Profiles

Follow Clubs

Notifications

---

# Version 3

Recommendations

AI Suggestions

Analytics

Campus Feed Ranking

---

# Coding Rules

Always keep code clean.

Prefer composition.

Avoid duplicated code.

Use reusable components.

Keep components small.

Strong typing everywhere.

Never use "any".

Never place business logic inside components.

Business logic belongs to services.

---

# Naming Rules

Services

AuthService

EventService

RegistrationService

ClubService

AdminService

Interfaces

Event

User

Registration

ApiResponse

Components

StudentHomeComponent

EventDetailComponent

ClubDashboardComponent

---

# Component Strategy

Every page should be built from reusable blocks.

Example:

Navbar

↓

SearchBar

↓

CategoryFilter

↓

FeaturedEvent

↓

EventFeed

↓

EventCard

↓

RegisterButton

Never create giant components.

---

# Long Term Vision

This is NOT just a CRUD project.

This should become a real product.

A student should spend time inside UniEvents because discovering campus life is enjoyable.

The platform should make university events feel alive.
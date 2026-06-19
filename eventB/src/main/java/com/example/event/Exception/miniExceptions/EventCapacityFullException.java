package com.example.event.Exception.miniExceptions;

public class EventCapacityFullException extends RuntimeException{
    public EventCapacityFullException(String message){
        super(message);
    }
}

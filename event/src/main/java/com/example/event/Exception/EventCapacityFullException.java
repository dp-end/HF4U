package com.example.event.Exception;

public class EventCapacityFullException extends RuntimeException{
    public EventCapacityFullException(String message){
        super(message);
    }
}

package com.example.event.Exception.miniExceptions;


public class ResourceNotFoundException extends RuntimeException {
    
    public ResourceNotFoundException(String message){
        super(message);
    }

}
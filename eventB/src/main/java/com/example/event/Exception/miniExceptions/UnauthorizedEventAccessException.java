package com.example.event.Exception.miniExceptions;

public class UnauthorizedEventAccessException extends RuntimeException{
    public UnauthorizedEventAccessException(String message){
        super(message);
    }
}

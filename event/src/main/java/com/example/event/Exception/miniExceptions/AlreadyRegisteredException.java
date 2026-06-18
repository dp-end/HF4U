package com.example.event.Exception.miniExceptions;

public class AlreadyRegisteredException extends RuntimeException{

    public AlreadyRegisteredException(String message){
        super(message);
    }
}

package com.example.event.Exception;

public class AlreadyRegisteredException extends RuntimeException{

    public AlreadyRegisteredException(String message){
        super(message);
    }
}

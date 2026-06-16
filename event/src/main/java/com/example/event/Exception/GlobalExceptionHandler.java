package com.example.event.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.event.Dto.ApiResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // Dönüş tipini ApiResponseDTO<?> olarak değiştirdik
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponseDTO<?>> handleNotFound(ResourceNotFoundException ex){
        
        // Dönüş tipimiz ApiResponseDTO olduğu için ErrorResponseDTO oluşturmamıza gerek kalmadı.
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponseDTO<>(false, ex.getMessage(), null));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponseDTO<?>> handleValidationException(
        MethodArgumentNotValidException ex) {

    var fieldError = ex.getBindingResult().getFieldError();

    String errorMessage = fieldError != null
            ? fieldError.getDefaultMessage()
            : "Validation error";

    return ResponseEntity.badRequest()
            .body(
                    new ApiResponseDTO<>(
                            false,
                            errorMessage,
                            null
                    )
            );
        }

        @ExceptionHandler(EmailAlreadyExistException.class)
        public ResponseEntity<ApiResponseDTO<?>> handleEmailExists(
                EmailAlreadyExistException ex) {

        return ResponseEntity.badRequest()
                .body(
                        new ApiResponseDTO<>(
                                false,
                                ex.getMessage(),
                                null
                        )
                );
        }

        @ExceptionHandler(InvalidCredentialsException.class)
        public ResponseEntity<ApiResponseDTO<?>> handleInvalidCredentials(
                InvalidCredentialsException ex) {

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(
                        new ApiResponseDTO<>(
                                false,
                                ex.getMessage(),
                                null
                        )
                );
        }



}
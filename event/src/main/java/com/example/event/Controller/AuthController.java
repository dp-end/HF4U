package com.example.event.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.ApiResponseDTO;
import com.example.event.Dto.Login.LoginRequestDTO;
import com.example.event.Dto.Login.LoginResponseDTO;
import com.example.event.Dto.User.UserRequestDTO;
import com.example.event.Dto.User.UserResponseDTO;
import com.example.event.Service.Auth.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponseDTO<UserResponseDTO> register (@Valid @RequestBody UserRequestDTO request) {
        return new ApiResponseDTO<>(true , "User registered successfully" , authService.register(request));
    }
    @PostMapping("/login")
    public ApiResponseDTO<LoginResponseDTO>login (@Valid @RequestBody LoginRequestDTO request) {
        return new ApiResponseDTO<>(true , "Login successfuly" , authService.login(request));
    }


}

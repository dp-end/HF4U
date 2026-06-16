package com.example.event.Service.Auth;

import com.example.event.Dto.Login.LoginRequestDTO;
import com.example.event.Dto.Login.LoginResponseDTO;
import com.example.event.Dto.User.UserRequestDTO;
import com.example.event.Dto.User.UserResponseDTO;

public interface AuthService {
    UserResponseDTO register (UserRequestDTO request);
    LoginResponseDTO login (LoginRequestDTO request);
}

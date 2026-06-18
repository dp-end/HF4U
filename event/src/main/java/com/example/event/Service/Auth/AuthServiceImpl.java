package com.example.event.Service.Auth;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.event.Dto.Login.LoginRequestDTO;
import com.example.event.Dto.Login.LoginResponseDTO;
import com.example.event.Dto.User.UserRequestDTO;
import com.example.event.Dto.User.UserResponseDTO;
import com.example.event.Entity.User;
import com.example.event.Exception.miniExceptions.EmailAlreadyExistException;
import com.example.event.Exception.miniExceptions.InvalidCredentialsException;
import com.example.event.Repository.UserRepository;
import com.example.event.Service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    @Override
    public UserResponseDTO register(UserRequestDTO request) {
        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new EmailAlreadyExistException("Email aldready exists:" + request.getEmail());
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(request.getRole());

        user.setCreatAt(LocalDateTime.now());

        User savedUser = userRepository.save(user);

        return mapToResponse(savedUser);
    }

    

    private UserResponseDTO mapToResponse(User user){
        UserResponseDTO response = new UserResponseDTO();

        response.setId(user.getId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setCreateAt(user.getCreatAt());

        return response;
    }



    @Override
    public LoginResponseDTO login(LoginRequestDTO request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new InvalidCredentialsException("Invalid credentials");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponseDTO(token);
    }

    
}

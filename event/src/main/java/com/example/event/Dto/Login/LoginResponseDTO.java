package com.example.event.Dto.Login;

import com.example.event.Entity.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponseDTO {
    private long id;
    private String fullName;
    private String email;
    private Role role;
}

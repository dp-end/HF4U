package com.example.event.Dto.User;

import java.time.LocalDateTime;

import com.example.event.Entity.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {
    private long id;
    private String fullName;
    private String email;
    private Role role;
    private LocalDateTime createAt;
}

package com.example.event.Dto.Login;


import com.example.event.Entity.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponseDTO {

    private String token;
    private long UserId;
    private String fullName;
    private Role role;
}

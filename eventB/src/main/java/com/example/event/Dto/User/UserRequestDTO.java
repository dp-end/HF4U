package com.example.event.Dto.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import com.example.event.Entity.Role;

@Getter
@Setter
public class UserRequestDTO {
    @NotBlank(message = "fullname cannot be empty")
    private String fullName;

    @Email(message = "invalid email format")
    private String email;

    @NotBlank(message = "password cannot be empty")
    private String password;


    private Role role;
}

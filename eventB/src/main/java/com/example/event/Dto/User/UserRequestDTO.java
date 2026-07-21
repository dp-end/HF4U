package com.example.event.Dto.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import com.example.event.Entity.Role;

@Getter
@Setter
public class UserRequestDTO {
    @NotBlank(message = "Ad soyad boş olamaz")
    private String fullName;

    @Email(message = "Geçersiz e-posta formatı")
    private String email;

    @NotBlank(message = "Şifre boş olamaz")
    private String password;


    private Role role;
}

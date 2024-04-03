package com.example.DocApp.entity;

import lombok.Data;

@Data
public class UserLoginRequest {

    private String email;
    private String password;
}

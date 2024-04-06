package com.example.DocApp.entity;

import lombok.Data;

@Data
public class UserLoginResponse {
    private User user;
    private Long userid;
}

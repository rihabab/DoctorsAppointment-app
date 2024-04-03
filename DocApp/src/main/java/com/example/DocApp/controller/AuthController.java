package com.example.DocApp.controller;


import com.example.DocApp.entity.User;
import com.example.DocApp.entity.UserLoginRequest;
import com.example.DocApp.repository.UserRepository;
import com.example.DocApp.service.AuthService;
import com.example.DocApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        return authService.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest userLoginRequest) {
        return authService.login(userLoginRequest);
    }
}

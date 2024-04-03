package com.example.DocApp.service;

import com.example.DocApp.entity.User;
import com.example.DocApp.entity.UserLoginRequest;
import com.example.DocApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;
@Service
public class AuthService {
    @Autowired
    private UserRepository userRepo;


    public ResponseEntity<?> register(@RequestBody User user){
        if(userRepo.findByEmail(user.getEmail()).isPresent() || userRepo.findByUsername(user.getUsername()).isPresent()){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email or username already in use");
        }else {
            userRepo.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created");
        }
    }


    public ResponseEntity<?> login(@RequestBody UserLoginRequest userLoginRequest) {

        Optional<User> userOptional = userRepo.findByEmail(userLoginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(userLoginRequest.getPassword())) {
                return ResponseEntity.status(HttpStatus.OK).body(user);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}
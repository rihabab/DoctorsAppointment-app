package com.example.DocApp.service;

import com.example.DocApp.entity.User;
import com.example.DocApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Method to create a new users
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Method to retrieve all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Method to retrieve a user by ID
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    // Method to update a user
    public User updateUser(Long userId, User updatedUser) {
        if (userRepository.existsById(userId)) {
            updatedUser.setId(userId);
            return userRepository.save(updatedUser);
        } else {
            return null;
        }
    }

    // Method to delete a user
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}

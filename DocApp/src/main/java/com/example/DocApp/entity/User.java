package com.example.DocApp.entity;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String email;

    private String nature;

    private String username;

    private String password;

    public User(String email, String username,String nature, String password){
        this.email=email;
        this.username=username;
        this.nature=nature;
        this.password=password;
    }

}

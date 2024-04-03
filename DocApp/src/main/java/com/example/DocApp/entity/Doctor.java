package com.example.DocApp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;

@Data
@Entity
@Table(name="doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String city;

    private String profession;

    private String address;

    private String email;

    private String contactNo;


}

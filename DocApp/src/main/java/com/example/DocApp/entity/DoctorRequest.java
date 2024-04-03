package com.example.DocApp.entity;

import lombok.Data;

@Data
public class DoctorRequest {

    private Doctor doctor;
    private String password;
}

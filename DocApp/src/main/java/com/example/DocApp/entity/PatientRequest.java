package com.example.DocApp.entity;

import lombok.Data;

@Data
public class PatientRequest {
    private Patient patient;
    private String password;
    private String nature;
}

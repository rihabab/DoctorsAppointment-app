package com.example.DocApp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name ;

    private String gender ;

    private String email ;

    private String mobileNum;

    private Date dateofbirth ;



}

package com.example.DocApp.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.util.Date;

@Data
@Entity
@Table(name="appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "doctorid", referencedColumnName = "id")
    private Doctor doctorid;

    @ManyToOne
    @JoinColumn(name = "patientid", referencedColumnName = "id")
    private Patient patientid;

    private Date date;

    private String time ;


}

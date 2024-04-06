package com.example.DocApp.repository;

import com.example.DocApp.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findPatientByEmail(String email);
}

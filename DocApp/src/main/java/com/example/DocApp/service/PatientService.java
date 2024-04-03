package com.example.DocApp.service;

import com.example.DocApp.entity.Patient;
import com.example.DocApp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Method to create a new patient
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Method to retrieve all patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Method to retrieve a patient by ID
    public Optional<Patient> getPatientById(Long patientId) {
        return patientRepository.findById(patientId);
    }

    // Method to update a patient
    public Patient updatePatient(Long patientId, Patient updatedPatient) {
        if (patientRepository.existsById(patientId)) {
            updatedPatient.setId(patientId);
            return patientRepository.save(updatedPatient);
        } else {
            return null; // or throw an exception indicating patient not found
        }
    }

    // Method to delete a patient
    public void deletePatient(Long patientId) {
        patientRepository.deleteById(patientId);
    }

}

package com.example.DocApp.controller;

import com.example.DocApp.entity.Patient;
import com.example.DocApp.entity.PatientRequest;
import com.example.DocApp.entity.User;
import com.example.DocApp.repository.PatientRepository;
import com.example.DocApp.service.AuthService;
import com.example.DocApp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private AuthService authService;

    @PostMapping
    public Patient createPatient(@RequestBody PatientRequest patient) {
        Patient registeredPatient= patient.getPatient();
        User user = new User(registeredPatient.getEmail(), registeredPatient.getName(), patient.getPassword());
        authService.register(user);
        return patientService.createPatient(registeredPatient);
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();

    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return patientService.getPatientById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        return patientService.updatePatient(id, updatedPatient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
    }
}

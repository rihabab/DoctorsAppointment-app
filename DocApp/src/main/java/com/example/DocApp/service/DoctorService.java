package com.example.DocApp.service;


import com.example.DocApp.entity.Doctor;
import com.example.DocApp.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    // Method to create a new hospital
    public Doctor createDoctor(Doctor hospital) {
        return doctorRepository.save(hospital);
    }

    // Method to retrieve all hospitals
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public List<Doctor> getDoctorsByCity(String city) {
        return doctorRepository.findDoctorByCity(city);
    }


    public List<Doctor> getDoctorsByProfession(String profession) {
        return doctorRepository.findDoctorByProfession(profession);
    }


    public List<Doctor> getDoctorsByCityProfession(String city, String profession) {
        return doctorRepository.findDoctorByCityAndProfession(city, profession);
    }
    // Method to retrieve a hospital by ID
    public Optional<Doctor> getDoctorById(Long hospitalId) {
        return doctorRepository.findById(hospitalId);
    }

    // Method to update a hospital
    public Doctor updateDoctor(Long hospitalId, Doctor updatedHospital) {
        if (doctorRepository.existsById(hospitalId)) {
            updatedHospital.setId(hospitalId);
            return doctorRepository.save(updatedHospital);
        } else {
            return null; // or throw an exception indicating hospital not found
        }
    }

    // Method to delete a hospital
    public void deleteDoctor(Long hospitalId) {
        doctorRepository.deleteById(hospitalId);
    }
}

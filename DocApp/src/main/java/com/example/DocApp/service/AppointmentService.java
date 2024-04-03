package com.example.DocApp.service;


import com.example.DocApp.entity.Appointment;
import com.example.DocApp.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    // Method to create a new appointment
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    // Method to retrieve all appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // Method to retrieve an appointment by ID
    public Optional<Appointment> getAppointmentById(Long appointmentId) {
        return appointmentRepository.findById(appointmentId);
    }

    // Method to update an appointment
    public Appointment updateAppointment(Long appointmentId, Appointment updatedAppointment) {
        if (appointmentRepository.existsById(appointmentId)) {
            updatedAppointment.setId(appointmentId);
            return appointmentRepository.save(updatedAppointment);
        } else {
            return null; // or throw an exception indicating appointment not found
        }
    }

    // Method to delete an appointment
    public void deleteAppointment(Long appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }
}

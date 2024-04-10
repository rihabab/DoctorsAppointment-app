package com.example.DocApp.controller;


import com.example.DocApp.entity.Appointment;
import com.example.DocApp.entity.Doctor;
import com.example.DocApp.entity.DoctorRequest;
import com.example.DocApp.entity.User;
import com.example.DocApp.service.AuthService;
import com.example.DocApp.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private AuthService authService;

    @PostMapping
    public Doctor createDoctor(@RequestBody DoctorRequest doctor) {
        Doctor registreddoctor=doctor.getDoctor();
        User user = new User(registreddoctor.getEmail(), registreddoctor.getName(), doctor.getNature(),doctor.getPassword());
        authService.register(user);
        return doctorService.createDoctor(registreddoctor);
    }

    @GetMapping
    public List<Doctor> getAllDoctors(@RequestParam(required = false) String city,
                                      @RequestParam(required = false) String profession) {

        if (profession != null && city != null) {
            return doctorService.getDoctorsByCityProfession(city, profession);
        } else if (city != null) {
            return doctorService.getDoctorsByCity(city);
        } else if (profession != null) {
            return doctorService.getDoctorsByProfession(profession);
        } else {
            return doctorService.getAllDoctors();
        }
    }


    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor updatedDoctor) {
        return doctorService.updateDoctor(id, updatedDoctor);
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
    }
}

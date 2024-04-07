package com.example.DocApp.service;

import com.example.DocApp.entity.*;
import com.example.DocApp.repository.DoctorRepository;
import com.example.DocApp.repository.PatientRepository;
import com.example.DocApp.repository.UserRepository;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;
@Slf4j
@Service
public class AuthService {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private DoctorRepository doctorRepository;


    @Autowired
    private PatientRepository patientRepository;



    public ResponseEntity<?> register(@RequestBody User user){
        if(userRepo.findByEmail(user.getEmail()).isPresent() || userRepo.findByUsername(user.getUsername()).isPresent()){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email or username already in use");
        }else {
            userRepo.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created");
        }
    }


    public ResponseEntity<?> login(@RequestBody UserLoginRequest userLoginRequest) {

        Optional<User> userOptional = userRepo.findByEmail(userLoginRequest.getEmail());

        if (userOptional.isPresent()) {
            log.info("user exists");
            UserLoginResponse userres = new UserLoginResponse();
            User user = userOptional.get();
            userres.setUser(user);
            if (user.getPassword().equals(userLoginRequest.getPassword())) {
                log.info("user password correcte");
                if ("doctor".equals(user.getNature())) {
                    log.info("User is a doctor");
                    Doctor doctor = doctorRepository.findDoctorByEmail(user.getEmail());
                    if (doctor != null) {
                        log.info(doctor.toString());
                        userres.setUserid(doctor.getId());
                    } else {
                        // Handle the case when doctor is not found
                    }
                } else if ("patient".equals(user.getNature())) {
                    log.info("User is a patient");
                    Patient patient = patientRepository.findPatientByEmail(user.getEmail());
                    if (patient != null) {
                        userres.setUserid(patient.getId());
                    } else {
                        // Handle the case when patient is not found
                    }
                }
                log.info("befor return statement" + userres);
                return ResponseEntity.status(HttpStatus.OK).body(userres);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}

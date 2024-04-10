package com.example.DocApp.repository;

import com.example.DocApp.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Doctor findDoctorByEmail(String email);
    List<Doctor> findDoctorByCityAndProfession(String city, String profession);
    List<Doctor> findDoctorByCity(String city);
    List<Doctor> findDoctorByProfession(String profession);
}

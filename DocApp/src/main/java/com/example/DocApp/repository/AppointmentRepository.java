package com.example.DocApp.repository;

import com.example.DocApp.entity.Appointment;
import com.example.DocApp.entity.Doctor;
import com.example.DocApp.entity.Patient;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctorid(Doctor doctorid, Sort date);
    List<Appointment> findByPatientid(Patient patientid, Sort date);
    List<Appointment> findByDateAndTaken(Date date, boolean taken);
    List<Appointment> findByDate(Date date);
    List<Appointment> findByTaken(boolean taken);

}

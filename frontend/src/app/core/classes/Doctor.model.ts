export class Doctor {
    name: String;
    city: String;
    profession : String;
    address: String;
    email:String;
    contactNo: String;
    constructor(){
      this.name='';
      this.email='';
      this.city='';  
      this.profession='';
      this.address='';
      this.contactNo='';
    }
  }
export class DoctorRequest {
    doctor: Doctor;
    password: String;
    nature: String;
    constructor(){
        this.doctor= new Doctor();
        this.password='';
        this.nature='doctor';
    }
}


export interface ApiResponseModel {
    status: number;
    body: any
}

export class User {
  id: number;
  username: String;
  email: String;
  password : String;
  constructor(){
    this.id=0;
    this.username='';
    this.email='';
    this.password='';  
  }
  

}

export class Appointment {
  doctorid: Doctor;
  patientid:Patient;
  date: string;
  time: String;
  constructor() {
    this.doctorid=new Doctor();
    this.patientid= new Patient();
    this.date="";
    this.time="";
    
  }
}
export class AppointmentRequest {
  doctor: Doctor;
  patient: Patient;
  date: Date;
  time: String;
  constructor() {
    this.doctor=new Doctor();
    this.patient= new Patient();
    this.date=new Date();
    this.time="";
    
  }
}

export class Patient {
  name: String;
  gender: String;
  email: String;
  mobileNum: String;
  dateofbirth: String;
  constructor(){
    this.name ="";
    this.gender="";
    this.email= "";
    this.mobileNum = "";
    this.dateofbirth= "";
  }
}
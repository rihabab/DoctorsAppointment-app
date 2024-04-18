export class Doctor {
  id: number;
    name: String;
    city: String;
    profession : String;
    address: String;
    email:String;
    contactNo: String;
    constructor(){
      this.id=0;
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

export class UserResponse {
  user: User;
  userid: number;
  constructor(){
    this.user=new User();
    this.userid=0;
  }
}

export class Appointment {
  id:number;
  doctorid: Doctor;
  patientid:Patient;
  date: string;
  time: String;
  taken: Boolean;
  constructor() {
    this.id=0;
    this.doctorid=new Doctor();
    this.patientid= new Patient();
    this.date="";
    this.time="";
    this.taken=false;
  }
}
export class AppointmentRequest {
  doctor: Doctor;
  patient: Patient;
  date: Date;
  time: String;
  taken: Boolean;
  constructor() {
    this.doctor=new Doctor();
    this.patient= new Patient();
    this.date=new Date();
    this.time="";
    this.taken= false;
  }
}

export class Patient {
  id:number;
  name: String;
  gender: String;
  email: String;
  mobileNum: String;
  dateofbirth: String;
  constructor(){
    this.id=3;
    this.name ="";
    this.gender="";
    this.email= "";
    this.mobileNum = "";
    this.dateofbirth= "";
  }
}
export class PatientRequest {
  patient: Patient;
  password: String;
  nature: String;
  constructor(){
      this.patient= new Patient();
      this.password='';
      this.nature='patient';
  }
}
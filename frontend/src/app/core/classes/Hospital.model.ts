export class Hospital {
    id: number;
    name: string;
    address: string;
    city: string;
    contactNo: string;
    email: string;
    username: string;
    password: string;
  
    constructor(
      
    ) {
      this.id = 0;
      this.name = '';
      this.address = '';
      this.city = '';
      this.contactNo = '';
      this.email = '';
      this.username = '';
      this.password = '';
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
  name: String;
  age : number;
  mobilenum: number;
  date: Date;
  time : String;
  city : String ;
  isFirstVisit : boolean;
  narration : String;
  isDone :boolean;
  constructor() {
    this.name="";
    this.age=0;
    this.mobilenum=0;
    this.date = new Date();
    this.time = "";
    this.city="";
    this.isFirstVisit = false;
    this.narration = "";
    this.isDone = false;
  }
}
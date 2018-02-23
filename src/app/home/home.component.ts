import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  student = [];
  
  fname: string;
  lname: string;
  dob: string;
  email: string;
  phone: number;
  faculty: string;
 
  fname_1: string;
  lname_1: string;
  dob_1: string;
  email_1: string;
  phone_1: number;
  faculty_1: string;

  id: number;

  fac = ['Computer','Electrical','Automobile','Mechanical','Civil'];

  constructor(){}

  ngOnInit(){
  }

  add_data(){
    this.student.push({
      'fname':this.fname,
      'lname':this.lname,
      'dob':this.dob,
      'email':this.email,
      'phone':this.phone,
      'faculty':this.faculty,
    });
    this.fname = '';
    this.lname = '';
    this.dob = '';
    this.email = '';
    this.phone = NaN;
    this.faculty = '';
  }
  removeItem(i){
    this.student.splice(i,1);
  }
  updateItem(i){
    this.fname_1=this.student[i]['fname'];
    this.lname_1=this.student[i]['lname'];
    this.dob_1=this.student[i]['dob'];
    this.email_1=this.student[i]['email'];
    this.phone_1=this.student[i]['phone'];
    this.faculty_1=this.student[i]['faculty'];
    this.id=i;
  }
  edit(){
    this.student[this.id]['fname']=this.fname_1;
    this.student[this.id]['lname']=this.lname_1;
    this.student[this.id]['dob']=this.dob_1;
    this.student[this.id]['email']=this.email_1;
    this.student[this.id]['phone']=this.phone_1;
    this.student[this.id]['faculty']=this.faculty_1;
  }

}
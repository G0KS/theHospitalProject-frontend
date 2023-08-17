import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  doctorsList: any = [];
  patientToken: any = 0;

  bookingForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[a-zA-z ]*')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    place: ['', [Validators.required, Validators.pattern('[a-zA-z ]*')]],
    gender: ['', [Validators.required, Validators.pattern('[a-zA-z]*')]],
    department: ['', [Validators.required]],
    doctor: ['', [Validators.required, Validators.pattern('[a-zA-z]*')]],
  });

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllDoctors().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          this.doctorsList.push(element.name);
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  bookNow() {
    let pname = this.bookingForm.value.fname;
    let age = this.bookingForm.value.age;
    let place = this.bookingForm.value.place;
    let gender = this.bookingForm.value.gender;
    let department = this.bookingForm.value.department;
    let doctor = this.bookingForm.value.doctor;

    localStorage.setItem('PatientToken', this.patientToken+1);
    let id = localStorage.getItem('PatientToken');
    console.log(id);

    // const body = {
    //   id:10,
    //   pname,
    //   age,
    //   place,
    //   gender,
    //   department,
    //   doctor,
    // };

    // this.api.addPatient(body).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }
}

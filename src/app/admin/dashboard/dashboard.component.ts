import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedUser: any = '';

  addDoctorForm = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    image: ['', [Validators.required, Validators.pattern('[a-zA-Z. ]*')]],
    gender: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    department: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('loggedUser');
  }

  addDoctor() {
    let id = this.addDoctorForm.value.id;
    let name = this.addDoctorForm.value.name;
    let image = this.addDoctorForm.value.image;
    let gender = this.addDoctorForm.value.gender;
    let age = this.addDoctorForm.value.age;
    let department = this.addDoctorForm.value.department;
    let email = this.addDoctorForm.value.email;

    const body = {
      id,
      name,
      image,
      gender,
      age,
      department,
      email,
    };

    this.api.addDoctor(body).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(`Dr ${name} added successfully`);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  logout() {
    alert('Logging out');
    localStorage.setItem('loggedUser', '');
    this.router.navigateByUrl('/admin/login');
  }
}

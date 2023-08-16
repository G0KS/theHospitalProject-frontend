import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css'],
})
export class OurDoctorsComponent implements OnInit {
  allDoctors: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.api.getAllDoctors().subscribe({
      next: (res: any) => {
        this.allDoctors = res;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
}

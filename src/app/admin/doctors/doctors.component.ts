import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  allDoctors: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.api.getAllDoctors().subscribe({
      next: (res: any) => {
        this.allDoctors = res;
        console.log(this.allDoctors);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  delete(id: any) {
    this.api.deleteDoctor(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllDoctors();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}

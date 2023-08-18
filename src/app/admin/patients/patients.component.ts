import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  allPatients: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllPatients().subscribe({
      next: (res: any) => {
        this.allPatients = res;
        console.log(this.allPatients);
        
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}

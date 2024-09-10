import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  provideNativeDateAdapter,
  MatNativeDateModule,
} from '@angular/material/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pegawai',
  standalone: true,
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [
    FormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    RouterOutlet,
    RouterLink,
    MatNativeDateModule,
  ],
  templateUrl: './add-pegawai.component.html',
  styleUrl: './add-pegawai.component.css',
})
export class AddPegawaiComponent implements OnInit {
  http = inject(HttpClient);
  datePipe = inject(DatePipe);

  datacabang: any = [];
  datajabatan: any = [];
  pegawaidata: any = {
    namaPegawai: '',
    kodeCabang: 0,
    kodeJabatan: 0,
    tanggalMulaiKontrak: null,
    tanggalHabisKontrak: null,
  };
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<AddPegawaiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getCabang();
    this.getJabatan();
  }

  onSubmit() {
    const formattedMulaiKontrak = this.datePipe.transform(
      this.pegawaidata.tanggalMulaiKontrak,
      'yyyy-MM-dd'
    );
    const formattedHabisKontrak = this.datePipe.transform(
      this.pegawaidata.tanggalHabisKontrak,
      'yyyy-MM-dd'
    );

    const payload = {
      ...this.pegawaidata,
      tanggalMulaiKontrak: formattedMulaiKontrak,
      tanggalHabisKontrak: formattedHabisKontrak,
    };

    this.pegawaidata = payload;

    this.http
      .post('http://localhost:8080/api/pegawai', this.pegawaidata)
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err) => {
          console.error('Failed to add employee:', err);
        },
      });
    console.log(this.pegawaidata);
  }

  getCabang() {
    this.http
      .get(`http://localhost:8080/api/cabang`)
      .subscribe((response: any) => (this.datacabang = response.data));
  }
  getJabatan() {
    this.http
      .get(`http://localhost:8080/api/jabatan`)
      .subscribe((response: any) => (this.datajabatan = response.data));
  }


}

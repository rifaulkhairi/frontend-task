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
  selector: 'app-edit-pegawai',
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
  templateUrl: './edit-pegawai.component.html',
  styleUrl: './edit-pegawai.component.css',
})
export class EditPegawaiComponent implements OnInit {
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
    private dialogRef: MatDialogRef<EditPegawaiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getPegawai();
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
      .put(
        `http://localhost:8080/api/pegawai/${this.data.kodePegawai}`,
        this.pegawaidata
      )
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err) => {
          console.error('Failed to updated employee:', err);
          this.dialogRef.close('success');
        },
      });
    console.log(this.pegawaidata);
  }

  getPegawai() {
    this.http
      .get(`http://localhost:8080/api/pegawai/${this.data.kodePegawai}`)
      .subscribe((rs: any) => {
        this.pegawaidata = {
          ...rs.data,
          kodeCabang: String(rs.data.kodeCabang),
          kodeJabatan: String(rs.data.kodeJabatan),
        };
      });
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

import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-jabatan',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './edit-jabatan.component.html',
  styleUrl: './edit-jabatan.component.css',
})
export class EditJabatanComponent implements OnInit {
  http = inject(HttpClient);
  datajabatan: any = {
    namaJabatan: '',
  };
  constructor(
    private dialogRef: MatDialogRef<EditJabatanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getJabatan();
  }
  getJabatan() {
    this.http
      .get(`http://localhost:8080/api/jabatan/${this.data.kodejabatan}`)
      .subscribe((rs: any) => {
        this.datajabatan = rs.data;
      });
  }

  onSubmit() {
    this.http
      .put(
        `http://localhost:8080/api/jabatan/${this.data.kodejabatan}`,
        this.datajabatan
      )
      .subscribe({
        next: (rs: any) => {
          this.dialogRef.close('success');
        },
        error: (err: any) => {
          console.error('Failed to jabatan:', err);
          this.dialogRef.close('error');
        },
      });
  }
}

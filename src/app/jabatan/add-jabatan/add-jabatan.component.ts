import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-jabatan',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './add-jabatan.component.html',
  styleUrl: './add-jabatan.component.css',
})
export class AddJabatanComponent {
  http = inject(HttpClient);
  datajabatan: any = {
    namaJabatan: '',
  };

  constructor(private dialogRef: MatDialogRef<AddJabatanComponent>) {}
  onSubmit() {
    this.http
      .post('http://localhost:8080/api/jabatan', this.datajabatan)
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err) => {
          console.error('Failed to add jabatan:', err);
          this.dialogRef.close('success');
        },
      });
    console.log('submit');
  }
}

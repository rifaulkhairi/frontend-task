import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cabang-add',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './cabang-add.component.html',
  styleUrl: './cabang-add.component.css',
})
export class CabangAddComponent {
  http = inject(HttpClient);
  cabangdata: any = {
    namaCabang: '',
  };

  constructor(private dialogRef: MatDialogRef<CabangAddComponent>) {}
  onSubmit() {
    this.http
      .post('http://localhost:8080/api/cabang', this.cabangdata)
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err) => {
          console.error('Failed to add employee:', err);
          this.dialogRef.close('success');
        },
      });
    console.log('submit');
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css',
})
export class ImportComponent {
  http = inject(HttpClient);
  constructor(
    private dialogRef: MatDialogRef<ImportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  dataimport: any = {
    data: null,
  };
  onFileChange(event: any) {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      this.dataimport.data = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.dataimport.data); // Append the file to formData

    this.http
      .post('http://localhost:8080/api/pegawai/upload', formData)
      .subscribe({
        next: (rs: any) => {
          this.dialogRef.close('success');
        },
        error: (err: any) => {
          this.dialogRef.close('error');
        },
      });
  }
}

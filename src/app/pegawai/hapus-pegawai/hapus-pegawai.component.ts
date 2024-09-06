import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hapus-pegawai',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hapus-pegawai.component.html',
  styleUrl: './hapus-pegawai.component.css',
})
export class HapusPegawaiComponent {
  http = inject(HttpClient);

  constructor(
    private dialogRef: MatDialogRef<HapusPegawaiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onSubmit() {
    this.http
      .delete(`http://localhost:8080/api/pegawai/${this.data.id}`)
      .subscribe({
        next: (rs: any) => {
          this.dialogRef.close('success');
        },
        error: (err) => {
          this.dialogRef.close('success');
        },
      });
  }
  batal() {
    this.dialogRef.close();
  }
}

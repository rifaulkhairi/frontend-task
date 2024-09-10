import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hapus-jabatan',
  standalone: true,
  imports: [],
  templateUrl: './hapus-jabatan.component.html',
  styleUrl: './hapus-jabatan.component.css',
})
export class HapusJabatanComponent {
  http = inject(HttpClient);
  constructor(
    private dialogRef: MatDialogRef<HapusJabatanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  batal() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.http
      .delete(`http://localhost:8080/api/jabatan/${this.data.kodejabatan}`)
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err: any) => {
          this.dialogRef.close('error');
        },
      });
  }
}

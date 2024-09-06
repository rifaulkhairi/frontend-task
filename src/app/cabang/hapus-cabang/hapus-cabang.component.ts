import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hapus-cabang',
  standalone: true,
  imports: [],
  templateUrl: './hapus-cabang.component.html',
  styleUrl: './hapus-cabang.component.css',
})
export class HapusCabangComponent {
  http = inject(HttpClient);
  constructor(
    private dialogRef: MatDialogRef<HapusCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  batal() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.http
      .delete(`http://localhost:8080/api/cabang/${this.data.idcabang}`)
      .subscribe({
        next: (res: any) => {
          this.dialogRef.close('success');
        },
        error: (err: any) => {
          this.dialogRef.close('success');
        },
      });
  }
}

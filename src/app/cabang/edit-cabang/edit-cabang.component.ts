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
  selector: 'app-edit-cabang',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
  ],
  templateUrl: './edit-cabang.component.html',
  styleUrl: './edit-cabang.component.css',
})
export class EditCabangComponent implements OnInit {
  http = inject(HttpClient);
  cabangdata: any = {
    namaCabang: '',
  };

  constructor(
    private dialogRef: MatDialogRef<EditCabangComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getCabang();
  }

  getCabang() {
    this.http
      .get(`http://localhost:8080/api/cabang/${this.data.idcabang}`)
      .subscribe((rs: any) => {
        this.cabangdata = rs;
        // console.log(this.cabangdata);
      });
  }

  onSubmit() {
    this.http
      .put(
        `http://localhost:8080/api/cabang/${this.data.idcabang}`,
        this.cabangdata
      )
      .subscribe({
        next: (rs: any) => {
          this.dialogRef.close('success');
        },
        error: (err: any) => {
          console.error('Failed to updated cabang:', err);
          this.dialogRef.close('success');
        },
      });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Jabatan } from '../../jabatan';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EditJabatanComponent } from '../edit-jabatan/edit-jabatan.component';
import { HapusJabatanComponent } from '../hapus-jabatan/hapus-jabatan.component';
import { AddJabatanComponent } from '../add-jabatan/add-jabatan.component';

@Component({
  selector: 'app-jabatan-list',
  standalone: true,
  imports: [],
  templateUrl: './jabatan-list.component.html',
  styleUrl: './jabatan-list.component.css',
})
export class JabatanListComponent implements OnInit {
  http = inject(HttpClient);
  daftarjabatan: Jabatan[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getJabatan();
  }

  getJabatan() {
    this.http.get(`http://localhost:8080/api/jabatan`).subscribe((rs: any) => {
      this.daftarjabatan = rs.data;
    });
  }
  handleAddCabang() {
    const dialogRef = this.dialog.open(AddJabatanComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getJabatan();
      }
    });
  }

  handleEditJabatan(kodejabatan: number) {
    console.log(kodejabatan);
    const dialogRef = this.dialog.open(EditJabatanComponent, {
      data: { kodejabatan },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getJabatan();
      }
    });
  }

  handleHapusCabang(kodejabatan: number) {
    const dialogRef = this.dialog.open(HapusJabatanComponent, {
      data: {
        kodejabatan,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getJabatan();
      }
    });
  }
}

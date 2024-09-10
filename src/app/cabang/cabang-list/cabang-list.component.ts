import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Cabang } from '../../cabang';
import { MatDialog } from '@angular/material/dialog';
import { CabangAddComponent } from '../cabang-add/cabang-add.component';
import { EditCabangComponent } from '../edit-cabang/edit-cabang.component';
import { HapusCabangComponent } from '../hapus-cabang/hapus-cabang.component';

@Component({
  selector: 'app-cabang-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './cabang-list.component.html',
  styleUrl: './cabang-list.component.css',
})
export class CabangListComponent implements OnInit {
  http = inject(HttpClient);
  daftarCabang: Cabang[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCabang();
  }

  getCabang() {
    this.http.get(`http://localhost:8080/api/cabang`).subscribe((rs: any) => {
      this.daftarCabang = rs.data;
    });
  }
  handleAddCabang() {
    const dialogRef = this.dialog.open(CabangAddComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getCabang();
      }
    });
  }

  handleEditCabang(idcabang: number) {
    const dialogRef = this.dialog.open(EditCabangComponent, {
      data: {
        idcabang,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getCabang();
      }
    });
  }

  handleHapusCabang(idcabang: number) {
    const dialogRef = this.dialog.open(HapusCabangComponent, {
      data: {
        idcabang,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getCabang();
      }
    });
  }
}

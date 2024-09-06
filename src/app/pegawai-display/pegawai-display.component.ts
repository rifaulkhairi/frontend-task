import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Pegawai } from '../pegawai';
import { MatDialog } from '@angular/material/dialog';
import { AddPegawaiComponent } from '../pegawai/add-pegawai/add-pegawai.component';
import { EditPegawaiComponent } from '../pegawai/edit-pegawai/edit-pegawai.component';
import { HapusPegawaiComponent } from '../pegawai/hapus-pegawai/hapus-pegawai.component';
import { ImportComponent } from '../pegawai/import/import.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pegawai-display',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatInputModule, FormsModule],
  templateUrl: './pegawai-display.component.html',
  styleUrl: './pegawai-display.component.css',
})
export class PegawaiDisplayComponent implements OnInit {
  namaPegawai = 'rifa ulkhairi';
  baseUrlBackend: any = 'http://127.0.0.1:8080';
  http = inject(HttpClient);
  employees: Pegawai[];
  cabang$: Observable<any[]> | undefined = undefined;

  filterdata: any = {
    data: 100,
  };

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.getPegawai();
    this.employees = [];
  }

  getPegawai() {
    this.http
      .get(
        `http://localhost:8080/api/pegawai/filter?DaysToExpire=${this.filterdata.data}`
      )
      .subscribe((response: any) => {
        this.employees = response;
        console.log(this.employees);
      });
  }
  changeFilter() {
    this.getPegawai();
  }

  onHapus(id: number) {
    const dialogRef = this.dialog.open(HapusPegawaiComponent, {
      data: {
        id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        console.log('success');
        this.getPegawai();
      }
    });
  }

  handleOpenCreatePegawai(kodePegawai: number) {
    const dialogRef = this.dialog.open(AddPegawaiComponent, {
      data: { kodePegawai },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getPegawai();
      }
    });
  }

  handleOpenEditPegawai(kodePegawai: number) {
    const dialogRef = this.dialog.open(EditPegawaiComponent, {
      data: { kodePegawai },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.getPegawai();
      }
    });
  }

  handleOpenImport() {
    const dialogRef = this.dialog.open(ImportComponent);
  }
}

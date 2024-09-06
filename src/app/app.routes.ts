import { Routes } from '@angular/router';
import { PegawaiDisplayComponent } from './pegawai-display/pegawai-display.component';
import { CabangListComponent } from './cabang/cabang-list/cabang-list.component';
import { JabatanListComponent } from './jabatan/jabatan-list/jabatan-list.component';

export const routes: Routes = [
  { path: '', component: PegawaiDisplayComponent },
  { path: 'cabang-list', component: CabangListComponent },
  { path: 'jabatan-list', component: JabatanListComponent },
];

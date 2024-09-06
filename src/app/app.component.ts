import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { PegawaiDisplayComponent } from './pegawai-display/pegawai-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    DataDisplayComponent,
    PegawaiDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  sidebarActive = false;
  currentpage: string = 'pegawai';
  constructor(private router: Router) {}

  goToPage(page: string) {
    if (page === 'pegawai') {
      this.router.navigate(['/']);
    } else if (page === 'jabatan') {
      this.router.navigate(['/jabatan-list']);
    } else if (page === 'cabang') {
      this.router.navigate(['/cabang-list']);
    }
    this.currentpage = page;
  }
}

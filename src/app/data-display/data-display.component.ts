import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {
  httpclient = inject(HttpClient);

  ngOnInit(): void {
      
  }


}

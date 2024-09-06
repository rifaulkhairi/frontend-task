import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusPegawaiComponent } from './hapus-pegawai.component';

describe('HapusPegawaiComponent', () => {
  let component: HapusPegawaiComponent;
  let fixture: ComponentFixture<HapusPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HapusPegawaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HapusPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

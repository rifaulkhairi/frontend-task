import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiDisplayComponent } from './pegawai-display.component';

describe('PegawaiDisplayComponent', () => {
  let component: PegawaiDisplayComponent;
  let fixture: ComponentFixture<PegawaiDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegawaiDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PegawaiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

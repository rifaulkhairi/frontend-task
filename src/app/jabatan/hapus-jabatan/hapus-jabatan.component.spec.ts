import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusJabatanComponent } from './hapus-jabatan.component';

describe('HapusJabatanComponent', () => {
  let component: HapusJabatanComponent;
  let fixture: ComponentFixture<HapusJabatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HapusJabatanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HapusJabatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

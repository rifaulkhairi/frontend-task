import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusCabangComponent } from './hapus-cabang.component';

describe('HapusCabangComponent', () => {
  let component: HapusCabangComponent;
  let fixture: ComponentFixture<HapusCabangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HapusCabangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HapusCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

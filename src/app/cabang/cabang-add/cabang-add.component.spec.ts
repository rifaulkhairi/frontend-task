import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabangAddComponent } from './cabang-add.component';

describe('CabangAddComponent', () => {
  let component: CabangAddComponent;
  let fixture: ComponentFixture<CabangAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabangAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabangAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

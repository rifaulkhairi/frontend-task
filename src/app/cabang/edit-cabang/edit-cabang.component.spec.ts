import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCabangComponent } from './edit-cabang.component';

describe('EditCabangComponent', () => {
  let component: EditCabangComponent;
  let fixture: ComponentFixture<EditCabangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCabangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

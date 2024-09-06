import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJabatanComponent } from './add-jabatan.component';

describe('AddJabatanComponent', () => {
  let component: AddJabatanComponent;
  let fixture: ComponentFixture<AddJabatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJabatanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJabatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

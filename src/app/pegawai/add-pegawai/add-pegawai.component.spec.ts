import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPegawaiComponent } from './add-pegawai.component';

describe('AddPegawaiComponent', () => {
  let component: AddPegawaiComponent;
  let fixture: ComponentFixture<AddPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPegawaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

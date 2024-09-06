import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JabatanListComponent } from './jabatan-list.component';

describe('JabatanListComponent', () => {
  let component: JabatanListComponent;
  let fixture: ComponentFixture<JabatanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JabatanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JabatanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

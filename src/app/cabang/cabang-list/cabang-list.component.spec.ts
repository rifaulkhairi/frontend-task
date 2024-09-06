import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabangListComponent } from './cabang-list.component';

describe('CabangListComponent', () => {
  let component: CabangListComponent;
  let fixture: ComponentFixture<CabangListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabangListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

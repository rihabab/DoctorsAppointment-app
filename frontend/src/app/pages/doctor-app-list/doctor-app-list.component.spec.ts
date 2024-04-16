import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppListComponent } from './doctor-app-list.component';

describe('DoctorAppListComponent', () => {
  let component: DoctorAppListComponent;
  let fixture: ComponentFixture<DoctorAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAppListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

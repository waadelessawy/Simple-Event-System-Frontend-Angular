import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpeakerDetailsComponent } from './admin-speaker-details.component';

describe('AdminSpeakerDetailsComponent', () => {
  let component: AdminSpeakerDetailsComponent;
  let fixture: ComponentFixture<AdminSpeakerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpeakerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpeakerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

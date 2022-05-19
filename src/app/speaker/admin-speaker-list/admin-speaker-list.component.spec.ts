import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpeakerListComponent } from './admin-speaker-list.component';

describe('AdminSpeakerListComponent', () => {
  let component: AdminSpeakerListComponent;
  let fixture: ComponentFixture<AdminSpeakerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSpeakerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpeakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSensorsComponent } from './warning-sensors.component';

describe('WarningSensorsComponent', () => {
  let component: WarningSensorsComponent;
  let fixture: ComponentFixture<WarningSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

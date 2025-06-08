import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMangmentComponent } from './device-mangment.component';

describe('DeviceMangmentComponent', () => {
  let component: DeviceMangmentComponent;
  let fixture: ComponentFixture<DeviceMangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceMangmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsionVisionComponent } from './msion-vision.component';

describe('MsionVisionComponent', () => {
  let component: MsionVisionComponent;
  let fixture: ComponentFixture<MsionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsionVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

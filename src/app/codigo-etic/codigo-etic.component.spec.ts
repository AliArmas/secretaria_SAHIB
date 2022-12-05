import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoEticComponent } from './codigo-etic.component';

describe('CodigoEticComponent', () => {
  let component: CodigoEticComponent;
  let fixture: ComponentFixture<CodigoEticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoEticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoEticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

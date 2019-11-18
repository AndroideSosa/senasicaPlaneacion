import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIEComponent } from './datos-ie.component';

describe('DatosIEComponent', () => {
  let component: DatosIEComponent;
  let fixture: ComponentFixture<DatosIEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosIEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

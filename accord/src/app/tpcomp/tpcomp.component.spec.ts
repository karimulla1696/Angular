import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcompComponent } from './tpcomp.component';

describe('TpcompComponent', () => {
  let component: TpcompComponent;
  let fixture: ComponentFixture<TpcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

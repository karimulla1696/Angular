import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TscompComponent } from './tscomp.component';

describe('TscompComponent', () => {
  let component: TscompComponent;
  let fixture: ComponentFixture<TscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

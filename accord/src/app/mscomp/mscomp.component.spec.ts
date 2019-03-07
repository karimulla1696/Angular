import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscompComponent } from './mscomp.component';

describe('MscompComponent', () => {
  let component: MscompComponent;
  let fixture: ComponentFixture<MscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

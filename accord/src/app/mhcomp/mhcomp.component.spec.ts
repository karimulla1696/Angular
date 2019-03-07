import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhcompComponent } from './mhcomp.component';

describe('MhcompComponent', () => {
  let component: MhcompComponent;
  let fixture: ComponentFixture<MhcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

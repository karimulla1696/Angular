import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlcompComponent } from './tlcomp.component';

describe('TlcompComponent', () => {
  let component: TlcompComponent;
  let fixture: ComponentFixture<TlcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrcompComponent } from './mrcomp.component';

describe('MrcompComponent', () => {
  let component: MrcompComponent;
  let fixture: ComponentFixture<MrcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

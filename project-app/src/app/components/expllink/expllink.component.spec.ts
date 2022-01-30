import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpllinkComponent } from './expllink.component';

describe('ExpllinkComponent', () => {
  let component: ExpllinkComponent;
  let fixture: ComponentFixture<ExpllinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpllinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpllinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

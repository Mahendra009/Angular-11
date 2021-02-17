import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsoftehdayComponent } from './dealsoftehday.component';

describe('DealsoftehdayComponent', () => {
  let component: DealsoftehdayComponent;
  let fixture: ComponentFixture<DealsoftehdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsoftehdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsoftehdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

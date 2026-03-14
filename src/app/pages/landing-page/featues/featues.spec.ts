import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featues } from './featues';

describe('Featues', () => {
  let component: Featues;
  let fixture: ComponentFixture<Featues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

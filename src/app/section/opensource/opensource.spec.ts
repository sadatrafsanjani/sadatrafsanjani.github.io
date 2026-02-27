import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opensource } from './opensource';

describe('Opensource', () => {
  let component: Opensource;
  let fixture: ComponentFixture<Opensource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opensource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opensource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

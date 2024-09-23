import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinformationComponent } from './personalinformation.component';

describe('PersonalinformationComponent', () => {
  let component: PersonalinformationComponent;
  let fixture: ComponentFixture<PersonalinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalinformationComponent]
    });
    fixture = TestBed.createComponent(PersonalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

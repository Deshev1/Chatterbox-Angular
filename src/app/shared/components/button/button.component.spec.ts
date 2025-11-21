import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { SUBMIT_BUTTON_MOCK } from '../../../test/mocks/button.config.mock';
import { ComponentRef } from '@angular/core';

describe('Button', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let componentRef: ComponentRef<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('btnConfig', SUBMIT_BUTTON_MOCK);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

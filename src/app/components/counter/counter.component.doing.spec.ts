import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<CounterComponent>;

  // Arrange
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  fit('increments the count', () => {
    // act
    const incrementButton = debugElement.query(
      By.css('[data-testid="increment-button"]')
    )

    incrementButton.triggerEventHandler('click', null);
    // re-render
    fixture.detectChanges();

    // Assert
    const countOutput = debugElement.query(
      By.css('[data-testid="count"]')
    )
    expect(countOutput.nativeElement.textContent).toBe('1');
  })

});

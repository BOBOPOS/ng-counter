import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.counter.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then 
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:1')
  });

  it('should minus 1 when click minus button', () => {
    // given
    component.counter.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    // when
    minusBtn.click();
    fixture.detectChanges();
    // then 
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:-1')
  });

  it('should minus button disappear when count number less than 0', () => {
    // given
    component.counter.count = -1;
    // when
    fixture.detectChanges();
    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]')
    expect(minusBtn).toBeFalsy()
  });

  it('should plus button disappear when count number greater than 10', () => {
    // given
    component.counter.count = 11;
    // when
    fixture.detectChanges();
    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]')
    expect(plusBtn).toBeFalsy()
  });

  it('should false when count number less than 0', () => {
    // given
    component.counter.count = -1;
    // when
    expect(component.isLargerOrEqualsThanZero()).toBeFalse();
  });

  it('should false when count number greater than 10', () => {
    // given
    component.counter.count = 11;
    // when
    expect(component.isLessOrEqualsTen()).toBeFalse();
  });

  it('should reset number to 0 when click reset button', () => {
    // given
    component.counter.count = 10;
    const resetBtn = fixture.nativeElement.querySelector('[data-test="resetBtn"]');
    // when
    resetBtn.click();
    fixture.detectChanges();
    // then 
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:0')
  });
});

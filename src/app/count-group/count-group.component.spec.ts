import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountGroupComponent } from './count-group.component';

describe('CountGroupComponent', () => {
  let component: CountGroupComponent;
  let fixture: ComponentFixture<CountGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CountGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add counter when click counter button', () => {
    // given
    component.counters = []
    // when
    component.doCreateCounter()
    // than
    expect(component.counters.length).toBe(1) 
  });
});

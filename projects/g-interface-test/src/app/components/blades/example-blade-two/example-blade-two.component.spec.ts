import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBladeTwoComponent } from './example-blade-two.component';

describe('ExampleBladeTwoComponent', () => {
  let component: ExampleBladeTwoComponent;
  let fixture: ComponentFixture<ExampleBladeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleBladeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBladeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

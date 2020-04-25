import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBladeOneComponent } from './example-blade-one.component';

describe('ExampleBladeOneComponent', () => {
  let component: ExampleBladeOneComponent;
  let fixture: ComponentFixture<ExampleBladeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleBladeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBladeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

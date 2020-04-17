import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavHeaderComponent } from './sidebar-nav-header.component';

describe('SidebarNavHeaderComponent', () => {
  let component: SidebarNavHeaderComponent;
  let fixture: ComponentFixture<SidebarNavHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

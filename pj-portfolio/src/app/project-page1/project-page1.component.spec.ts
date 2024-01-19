import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPage1Component } from './project-page1.component';

describe('ProjectPage1Component', () => {
  let component: ProjectPage1Component;
  let fixture: ComponentFixture<ProjectPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

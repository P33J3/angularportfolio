import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPage2Component } from './project-page2.component';

describe('ProjectPage2Component', () => {
  let component: ProjectPage2Component;
  let fixture: ComponentFixture<ProjectPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

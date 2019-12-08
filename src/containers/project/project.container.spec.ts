import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainer } from './project.container';

describe('ProjectContainer', () => {
  let component: ProjectContainer;
  let fixture: ComponentFixture<ProjectContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectContainer } from './new-project.container';

describe('NewProjectContainer', () => {
  let component: NewProjectContainer;
  let fixture: ComponentFixture<NewProjectContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

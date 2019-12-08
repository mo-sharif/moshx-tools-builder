import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectContainer } from './edit-project.container';

describe('EditProjectContainer', () => {
  let component: EditProjectContainer;
  let fixture: ComponentFixture<EditProjectContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

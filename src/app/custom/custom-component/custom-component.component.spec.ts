import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponent } from './custom-component.component';

describe('DragAndDropComponent', () => {
  let component: CustomComponent;
  let fixture: ComponentFixture<CustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

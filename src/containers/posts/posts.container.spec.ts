import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsContainer } from './posts.container';

describe('PostsContainer', () => {
  let component: PostsContainer;
  let fixture: ComponentFixture<PostsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

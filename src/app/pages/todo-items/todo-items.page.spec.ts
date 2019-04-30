import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsPage } from './todo-items.page';

describe('TodoItemsPage', () => {
  let component: TodoItemsPage;
  let fixture: ComponentFixture<TodoItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableMenuComponent } from './task-table-menu.component';

describe('TaskTableMenuComponent', () => {
  let component: TaskTableMenuComponent;
  let fixture: ComponentFixture<TaskTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTableMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

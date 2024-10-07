import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnRenameComponent } from './task-column-rename.component';

describe('TaskColumnRenameComponent', () => {
  let component: TaskColumnRenameComponent;
  let fixture: ComponentFixture<TaskColumnRenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskColumnRenameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskColumnRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

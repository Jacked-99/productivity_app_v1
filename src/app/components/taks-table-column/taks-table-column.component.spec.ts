import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksTableColumnComponent } from './taks-table-column.component';

describe('TaksTableColumnComponent', () => {
  let component: TaksTableColumnComponent;
  let fixture: ComponentFixture<TaksTableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaksTableColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaksTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

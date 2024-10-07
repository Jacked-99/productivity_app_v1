import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksTableButtonComponent } from './taks-table-button.component';

describe('TaksTableButtonComponent', () => {
  let component: TaksTableButtonComponent;
  let fixture: ComponentFixture<TaksTableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaksTableButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaksTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

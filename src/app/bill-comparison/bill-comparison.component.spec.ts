import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillComparisonComponent } from './bill-comparison.component';

describe('BillComparisonComponent', () => {
  let component: BillComparisonComponent;
  let fixture: ComponentFixture<BillComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

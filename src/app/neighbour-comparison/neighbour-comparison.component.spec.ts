import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourComparisonComponent } from './neighbour-comparison.component';

describe('NeighbourComparisonComponent', () => {
  let component: NeighbourComparisonComponent;
  let fixture: ComponentFixture<NeighbourComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighbourComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighbourComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

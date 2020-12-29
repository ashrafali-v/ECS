import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTipsComponent } from './savings-tips.component';

describe('SavingsTipsComponent', () => {
  let component: SavingsTipsComponent;
  let fixture: ComponentFixture<SavingsTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

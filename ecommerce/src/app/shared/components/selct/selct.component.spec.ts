import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctComponent } from './selct.component';

describe('SelctComponent', () => {
  let component: SelctComponent;
  let fixture: ComponentFixture<SelctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelctComponent]
    });
    fixture = TestBed.createComponent(SelctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

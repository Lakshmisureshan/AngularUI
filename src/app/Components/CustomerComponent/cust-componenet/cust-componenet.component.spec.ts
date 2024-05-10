import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustComponenetComponent } from './cust-componenet.component';

describe('CustComponenetComponent', () => {
  let component: CustComponenetComponent;
  let fixture: ComponentFixture<CustComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustComponenetComponent]
    });
    fixture = TestBed.createComponent(CustComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

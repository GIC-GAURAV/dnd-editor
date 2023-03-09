import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerItemComponent } from './inner-item.component';

describe('InnerItemComponent', () => {
  let component: InnerItemComponent;
  let fixture: ComponentFixture<InnerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

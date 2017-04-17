import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetailsComponent } from './ip-details.component';

describe('IpDetailsComponent', () => {
  let component: IpDetailsComponent;
  let fixture: ComponentFixture<IpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

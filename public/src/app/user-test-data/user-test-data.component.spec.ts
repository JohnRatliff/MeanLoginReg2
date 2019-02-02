import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestDataComponent } from './user-test-data.component';

describe('UserTestDataComponent', () => {
  let component: UserTestDataComponent;
  let fixture: ComponentFixture<UserTestDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

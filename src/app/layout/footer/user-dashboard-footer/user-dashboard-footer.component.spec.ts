import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardFooterComponent } from './user-dashboard-footer.component';

describe('UserDashboardFooterComponent', () => {
  let component: UserDashboardFooterComponent;
  let fixture: ComponentFixture<UserDashboardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

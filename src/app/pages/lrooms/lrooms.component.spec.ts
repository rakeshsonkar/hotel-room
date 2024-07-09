import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LroomsComponent } from './lrooms.component';

describe('LroomsComponent', () => {
  let component: LroomsComponent;
  let fixture: ComponentFixture<LroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

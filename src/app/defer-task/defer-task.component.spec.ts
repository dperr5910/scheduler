import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferTaskComponent } from './defer-task.component';

describe('DeferTaskComponent', () => {
  let component: DeferTaskComponent;
  let fixture: ComponentFixture<DeferTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

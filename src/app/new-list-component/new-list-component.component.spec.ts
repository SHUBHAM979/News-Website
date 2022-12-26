import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListComponentComponent } from './new-list-component.component';

describe('NewListComponentComponent', () => {
  let component: NewListComponentComponent;
  let fixture: ComponentFixture<NewListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

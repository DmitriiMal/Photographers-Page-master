import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroCarsPageComponent } from './retro-cars-page.component';

describe('RetroCarsPageComponent', () => {
  let component: RetroCarsPageComponent;
  let fixture: ComponentFixture<RetroCarsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetroCarsPageComponent]
    });
    fixture = TestBed.createComponent(RetroCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

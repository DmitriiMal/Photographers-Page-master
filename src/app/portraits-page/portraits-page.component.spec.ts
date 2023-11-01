import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitsPageComponent } from './portraits-page.component';

describe('PortraitsPageComponent', () => {
  let component: PortraitsPageComponent;
  let fixture: ComponentFixture<PortraitsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortraitsPageComponent]
    });
    fixture = TestBed.createComponent(PortraitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

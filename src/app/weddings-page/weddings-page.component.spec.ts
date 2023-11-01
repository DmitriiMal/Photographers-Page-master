import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsPageComponent } from './weddings-page.component';

describe('WeddingsPageComponent', () => {
  let component: WeddingsPageComponent;
  let fixture: ComponentFixture<WeddingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingsPageComponent]
    });
    fixture = TestBed.createComponent(WeddingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

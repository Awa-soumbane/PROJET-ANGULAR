import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderawaComponent } from './headerawa.component';

describe('HeaderawaComponent', () => {
  let component: HeaderawaComponent;
  let fixture: ComponentFixture<HeaderawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderawaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsDetailComponent } from './gifts-detail.component';

describe('GiftsDetailComponent', () => {
  let component: GiftsDetailComponent;
  let fixture: ComponentFixture<GiftsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

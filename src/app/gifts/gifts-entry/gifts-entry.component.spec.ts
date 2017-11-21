import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsEntryComponent } from './gifts-entry.component';

describe('GiftsEntryComponent', () => {
  let component: GiftsEntryComponent;
  let fixture: ComponentFixture<GiftsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

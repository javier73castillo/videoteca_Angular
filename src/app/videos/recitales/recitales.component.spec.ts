import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecitalesComponent } from './recitales.component';

describe('RecitalesComponent', () => {
  let component: RecitalesComponent;
  let fixture: ComponentFixture<RecitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentalesComponent } from './documentales.component';

describe('DocumentalesComponent', () => {
  let component: DocumentalesComponent;
  let fixture: ComponentFixture<DocumentalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

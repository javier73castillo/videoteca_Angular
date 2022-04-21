import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasComponent } from './entrevistas.component';

describe('EntrevistasComponent', () => {
  let component: EntrevistasComponent;
  let fixture: ComponentFixture<EntrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoUpdateComponent } from './ramo-update.component';

describe('RamoUpdateComponent', () => {
  let component: RamoUpdateComponent;
  let fixture: ComponentFixture<RamoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

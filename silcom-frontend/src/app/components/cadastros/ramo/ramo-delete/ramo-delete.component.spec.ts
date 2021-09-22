import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoDeleteComponent } from './ramo-delete.component';

describe('RamoDeleteComponent', () => {
  let component: RamoDeleteComponent;
  let fixture: ComponentFixture<RamoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

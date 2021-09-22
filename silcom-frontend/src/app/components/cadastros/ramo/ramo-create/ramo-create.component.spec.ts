import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoCreateComponent } from './ramo-create.component';

describe('RamoCreateComponent', () => {
  let component: RamoCreateComponent;
  let fixture: ComponentFixture<RamoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesGuideComponent } from './styles-guide.component';

describe('StylesGuideComponent', () => {
  let component: StylesGuideComponent;
  let fixture: ComponentFixture<StylesGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

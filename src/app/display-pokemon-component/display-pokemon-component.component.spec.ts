import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPokemonComponentComponent } from './display-pokemon-component.component';

describe('DisplayPokemonComponentComponent', () => {
  let component: DisplayPokemonComponentComponent;
  let fixture: ComponentFixture<DisplayPokemonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPokemonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

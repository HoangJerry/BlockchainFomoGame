import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDiceComponent } from './game-dice.component';

describe('GameDiceComponent', () => {
  let component: GameDiceComponent;
  let fixture: ComponentFixture<GameDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

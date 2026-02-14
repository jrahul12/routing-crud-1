import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSinleCardComponent } from './movie-sinle-card.component';

describe('MovieSinleCardComponent', () => {
  let component: MovieSinleCardComponent;
  let fixture: ComponentFixture<MovieSinleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSinleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSinleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

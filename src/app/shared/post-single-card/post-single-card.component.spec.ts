import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingleCardComponent } from './post-single-card.component';

describe('PostSingleCardComponent', () => {
  let component: PostSingleCardComponent;
  let fixture: ComponentFixture<PostSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSingleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

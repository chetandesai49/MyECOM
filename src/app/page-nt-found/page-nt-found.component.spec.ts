import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNtFoundComponent } from './page-nt-found.component';

describe('PageNtFoundComponent', () => {
  let component: PageNtFoundComponent;
  let fixture: ComponentFixture<PageNtFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNtFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNtFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageOnePage } from './page-one.page';

describe('PageOnePage', () => {
  let component: PageOnePage;
  let fixture: ComponentFixture<PageOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

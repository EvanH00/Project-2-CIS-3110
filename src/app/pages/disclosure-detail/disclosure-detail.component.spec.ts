import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureDetailComponent } from './disclosure-detail.component';

describe('DisclosureDetailComponent', () => {
  let component: DisclosureDetailComponent;
  let fixture: ComponentFixture<DisclosureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclosureDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

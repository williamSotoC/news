import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiDetailComponent } from './corsi-detail.component';

describe('CorsiDetailComponent', () => {
  let component: CorsiDetailComponent;
  let fixture: ComponentFixture<CorsiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

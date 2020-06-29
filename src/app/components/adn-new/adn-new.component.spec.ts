import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnNewComponent } from './adn-new.component';

describe('AdnNewComponent', () => {
  let component: AdnNewComponent;
  let fixture: ComponentFixture<AdnNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdnNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

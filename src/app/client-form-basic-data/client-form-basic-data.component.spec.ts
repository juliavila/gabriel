import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormBasicDataComponent } from './client-form-basic-data.component';

describe('ClientFormBasicDataComponent', () => {
  let component: ClientFormBasicDataComponent;
  let fixture: ComponentFixture<ClientFormBasicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormBasicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

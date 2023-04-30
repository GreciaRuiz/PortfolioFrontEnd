import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAPComponent } from './perfil-ap.component';

describe('PerfilAPComponent', () => {
  let component: PerfilAPComponent;
  let fixture: ComponentFixture<PerfilAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

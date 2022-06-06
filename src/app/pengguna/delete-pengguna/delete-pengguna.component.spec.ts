import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePenggunaComponent } from './delete-pengguna.component';

describe('DeletePenggunaComponent', () => {
  let component: DeletePenggunaComponent;
  let fixture: ComponentFixture<DeletePenggunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePenggunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

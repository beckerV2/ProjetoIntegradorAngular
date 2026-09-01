import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadLivro } from './cad-livro';

describe('CadLivro', () => {
  let component: CadLivro;
  let fixture: ComponentFixture<CadLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadLivro],
    }).compileComponents();

    fixture = TestBed.createComponent(CadLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss',
})
export class Exercicio9 {
  nomeProduto: string = '';
  quantidade: number = 0;

  aumentarEstoque() {
    this.quantidade++;
  }

  diminuirEstoque() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss',
})
export class Exercicio11 {
  nomeProduto: string = 'Cadeira';
  preco: number = 120;
  quantidade: number = 1;
  mensagem: string = '';

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = 'Adicionado ao carrinho: ' 
      + this.quantidade + 'x ' + this.nomeProduto;
  }
}

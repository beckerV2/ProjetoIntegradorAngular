import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.scss'
})
export class Exercicio12 {

  nomeProduto: string = '';
  quantidadeProduto: number = 0;

  mensagem: string = '';

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    }
  ];

  cadastrar() {

    if (
      this.nomeProduto.trim() === '' ||
      this.quantidadeProduto < 0
    ) {
      this.mensagem = 'Não foi possível cadastrar o produto.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length + 1,
      nome: this.nomeProduto,
      quantidade: this.quantidadeProduto
    };

    this.produtos.push(novoProduto);

    this.nomeProduto = '';
    this.quantidadeProduto = 0;
    this.mensagem = '';
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

}
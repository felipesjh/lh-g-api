import { Component } from '@angular/core';
import { Produto } from 'src/app/models/Produtos.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})


export class ListaProdutoComponent {
  public produtos: Produto[] = [ ];
  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService){}
  
  ngOnInit():void{
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos()
    .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )

  }

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      vaga => {this.produto = new Produto(0,"","","",0)},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/restrito/lista";

  }
}

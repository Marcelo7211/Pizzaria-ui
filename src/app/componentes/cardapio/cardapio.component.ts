import { Pedido } from './../../model/Pedido';
import { PedidoService } from './../../service/pedido.service';

import { Cardapio } from './../../model/Cardapio';
import { CardapioService } from './../../service/cardapio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapios: Cardapio[];
  pedido: Pedido;


  constructor(private service: CardapioService, private servicePedido: PedidoService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe((resp: Cardapio[]) => {
      this.cardapios = resp
      // this.cardapios.forEach((pedido) => {
      //   this.pedido = new Pedido();
      //   this.servicePedido.findById(pedido.pedido.id).subscribe((resp: Pedido)=>{
      //     this.pedido = resp
      //   })
      // })

      console.log(resp)
    })
  }





}

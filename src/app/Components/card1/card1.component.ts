import { Component, Input, OnInit, inject } from '@angular/core';
import { AddToCartService } from 'src/app/Services/add-to-cart.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {

  cartService = inject(AddToCartService)
  
  @Input() imagem: any;
  @Input() titulo: any;
  @Input() preco: any;
  @Input() promo: any;
  @Input() precoPromo: any;
  @Input() estoque: any;
  @Input() botao: any;
  constructor() {}

  ngOnInit() {}

  addToCart(){
    this.cartService.addToCart();
  }
}

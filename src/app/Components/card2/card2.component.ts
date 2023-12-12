import { Component, OnInit, Input, inject } from '@angular/core';
import { AddToCartService } from 'src/app/Services/add-to-cart.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {
  cartService = inject(AddToCartService);

  @Input() imagem: any;
  @Input() titulo: any;
  @Input() preco: any;
  @Input() promo: any;
  @Input() precoPromo: any;
  @Input() estoque: any;
  @Input() miniDesc: any;
  @Input() botao: any;
  constructor() {}

  ngOnInit() {}

  addToCart() {
    this.cartService.addToCart();
  }
}

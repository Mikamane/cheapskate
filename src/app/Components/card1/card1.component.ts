import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {
  @Input() imagem: any;
  @Input() titulo: any;
  @Input() preco: any;
  @Input() promo: any;
  @Input() precoPromo: any;
  @Input() estoque: any;
  @Input() botao: any;
  constructor() {}

  ngOnInit() {}
}

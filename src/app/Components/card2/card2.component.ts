import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {
  @Input() imagem: any;
  @Input() titulo: any;
  @Input() preco: any;
  @Input() promo: any;
  @Input() precoPromo: any;
  @Input() estoque: any;
  @Input() miniDesc: any;
  constructor() {}

  ngOnInit() {}
}

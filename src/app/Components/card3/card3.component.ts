import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
})
export class Card3Component  implements OnInit {

  @Input() imagem: any;
  @Input() bairro: any;
  @Input() endereco: any;
  constructor() { }

  ngOnInit() {}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  produtos = [
    {
      imagem:
        '../../assets/imgteste.jpg',
      titulo: 'Lorem Ipsum - Lorem ipsum dolor sit amet.',
      preco: '649,99',
      promo: 'nao',
      precoPromo: '549,99',
      quant: '11',
      miniDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi pariatur obcaecati rerum, fugiat, aliquid impedit similique beatae magni.',
    },
    {
      imagem:
        '../../assets/imgteste.jpg',
      titulo: 'Lorem Ipsum - Lorem ipsum dolor sit amet.',
      preco: '649,99',
      promo: 'nao',
      precoPromo: '549,99',
      quant: '9',
      miniDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi pariatur obcaecati rerum, fugiat, aliquid impedit similique beatae magni.',
    },
    {
      imagem:
        '../../assets/imgteste.jpg',
      titulo: 'Lorem Ipsum - Lorem ipsum dolor sit amet.',
      preco: '649,99',
      promo: 'nao',
      precoPromo: '549,99',
      quant: '9',
      miniDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi pariatur obcaecati rerum, fugiat, aliquid impedit similique beatae magni.',
    },
    {
      imagem:
        '../../assets/imgteste.jpg',
      titulo: 'Lorem Ipsum - Lorem ipsum dolor sit amet.',
      preco: '649,99',
      promo: 'nao',
      precoPromo: '549,99',
      quant: '9',
      miniDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi pariatur obcaecati rerum, fugiat, aliquid impedit similique beatae magni.',
    },
  ];
}

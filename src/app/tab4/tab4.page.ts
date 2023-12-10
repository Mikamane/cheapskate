import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  lojas = [
    {
      imagem: '../../assets/loja1.jpg',
      bairro: 'Campo Grande, Rio de Janeiro - RJ',
      endereco: 'Rua Major Armando de Sousa Melo, 257, 23055-536',
    },
    {
      imagem: '../../assets/loja2.jpg',
      bairro: 'Tijuca, Rio de Janeiro - RJ',
      endereco: 'Av. Maracanã, 987, 20511-000',
    },
    {
      imagem: '../../assets/loja3.jpg',
      bairro: 'Centro, Rio de Janeiro - RJ',
      endereco: 'Praça Quinze de Novembro, 48, 20010-010',
    },
  ];
}

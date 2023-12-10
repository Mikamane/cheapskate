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
      imagem: '../../assets/lojaexemplo.jpg',
      bairro: 'Guaratiba - RJ',
      endereco:
        'Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ, 23045-830',
    },
    {
      imagem: '../../assets/lojaexemplo.jpg',
      bairro: 'Guaratiba - RJ',
      endereco:
        'Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ, 23045-830',
    },
    {
      imagem: '../../assets/lojaexemplo.jpg',
      bairro: 'Guaratiba - RJ',
      endereco:
        'Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ, 23045-830',
    },
    {
      imagem: '../../assets/lojaexemplo.jpg',
      bairro: 'Guaratiba - RJ',
      endereco:
        'Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ, 23045-830',
    },
    {
      imagem: '../../assets/lojaexemplo.jpg',
      bairro: 'Guaratiba - RJ',
      endereco:
        'Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ, 23045-830',
    },
  ];
}

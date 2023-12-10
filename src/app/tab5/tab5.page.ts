import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  favoritos = [
    {
      imagem: '../../assets/item1.png',
      titulo: 'Rolamento Black Sheep Gold',
      preco: '56,90',
      promo: 'nao',
      precoPromo: '46,90',
      quant: '50',
      miniDesc:
        'Os novos rolamentos Black Sheep são fabricados na CHINA na principal fábrica de rolamentos do Mundo, usando tecnologia e materias de alta qualidade.',
    },
    {
      imagem: '../../assets/skate1.png',
      titulo: 'Skate Ahead Completo Amador 8.0 Bones Head Pilot',
      preco: '419,90',
      promo: 'nao',
      precoPromo: '319,90',
      quant: '15',
      miniDesc:
        'Esse kit foi idealizado para as pessoas que estão iniciando e irão montar o seu primeiro Skate, também é recomentado para crianças que terão o seu primeiro skate.',
    },
    {
      imagem: '../../assets/skate2.png',
      titulo: 'Skate Ahead Completo Amador 8.0 Bones Head Apache',
      preco: '419,90',
      promo: 'sim',
      precoPromo: '359,90',
      quant: '8',
      miniDesc:
        'Esse kit foi idealizado para as pessoas que estão iniciando e irão montar o seu primeiro Skate, também é recomentado para crianças que terão o seu primeiro skate.',
    },
    {
      imagem: '../../assets/item2.png',
      titulo: 'Rolamento Black Sheep Importado Red',
      preco: '40,41',
      promo: 'nao',
      precoPromo: '30,41',
      quant: '35',
      miniDesc:
        'Os novos rolamentos Black Sheep são fabricados na CHINA na principal faabrica de rolamentos do Mundo, usando tecnologia e materias de alta qualidade.',
    },
    {
      imagem: '../../assets/item15.png',
      titulo: 'Kit Proteção ARS',
      preco: '239,90',
      promo: 'sim',
      precoPromo: '200,90',
      quant: '20',
      miniDesc:
        'A opção inteligente para oferecer a segurança necessária nas sessões de skate. O Kit apresenta 2 wrist guard, 2 cotoveleiras e 2 joelheiras, além de tira regulável por fivela de engate que oferece maior firmeza no ajuste.',
    },
  ];

  historico = [
    {
      imagem: '../../assets/item15.png',
      titulo: 'Kit Proteção ARS',
      preco: '239,90',
      promo: 'sim',
      precoPromo: '200,90',
      quant: '20',
      miniDesc:
        'A opção inteligente para oferecer a segurança necessária nas sessões de skate. O Kit apresenta 2 wrist guard, 2 cotoveleiras e 2 joelheiras, além de tira regulável por fivela de engate que oferece maior firmeza no ajuste.',
    },
    {
      imagem: '../../assets/skate4.png',
      titulo: 'Skate Montando Burkys Iniciante',
      preco: '219,99',
      promo: 'sim',
      precoPromo: '149,99',
      quant: '17',
      miniDesc:
        'Marca: Burkys; Shape: Tamanho 8" de Marfim (Máximo de 60kg); Truck: 139mm; Rolamento: Abec 5; Roda: Fomo Vertical 53mm',
    },
    {
      imagem: '../../assets/item6.png',
      titulo: 'Lixa Shake Junt',
      preco: '99,38',
      promo: 'sim',
      precoPromo: '79,38',
      quant: '9',
      miniDesc: 'Lixa Shake Junt Preta/Verde emborrachada. Produto importado.',
    },
    {
      imagem: '../../assets/item2.png',
      titulo: 'Rolamento Black Sheep Importado Red',
      preco: '40,41',
      promo: 'sim',
      precoPromo: '20,41',
      quant: '9',
      miniDesc:
        'Os novos rolamentos Black Sheep são fabricados na CHINA na principal faabrica de rolamentos do Mundo, usando tecnologia e materias de alta qualidade.',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  produtos = [
    {
      imagem: '../../assets/skate1.png',
      titulo: 'Skate Ahead Completo Amador 8.0 Bones Head Pilot',
      preco: '419,90',
      promo: 'nao',
      precoPromo: '319,90',
      quant: '12',
      miniDesc:
        'Esse kit foi idealizado para as pessoas que estão iniciando e irão montar o seu primeiro Skate, também é recomentado para crianças que terão o seu primeiro skate. ',
    },
    {
      imagem: '../../assets/skate5.png',
      titulo: 'Skate Purple Iniciante Donut I',
      preco: '399,90',
      promo: 'nao',
      precoPromo: '319,90',
      quant: '7',
      miniDesc:
        'Os skates montados da Purple são produzidos com 4 lâminas leves e resistentes de eucalipto 3 folhas de embuia, os trucks são fabricados com liga de alumínio especial e pintura exopi.',
    },
    {
      imagem: '../../assets/item1.png',
      titulo: 'Rolamento Black Sheep Gold',
      preco: '56,90',
      promo: 'nao',
      precoPromo: '26,90',
      quant: '20',
      miniDesc:
        'Os novos rolamentos Black Sheep são fabricados na CHINA na principal faabrica de rolamentos do Mundo, usando tecnologia e materias de alta qualidade.',
    },
    {
      imagem: '../../assets/item4.png',
      titulo: 'Rolamento Nineclouds High Speed',
      preco: '64,90',
      promo: 'nao',
      precoPromo: '64,90',
      quant: '26',
      miniDesc: 'Rolamento Nineclouds importade de alta precisão.',
    },
    {
      imagem: '../../assets/item5.png',
      titulo: 'Rolamento Bronson G2',
      preco: '199,90',
      promo: 'nao',
      precoPromo: '99,90',
      quant: '13',
      miniDesc:
        'Rolamento Bronson G2 Fabricado com a mais alta tecnologia dísponivel no mercado, considerado o melhor rolamento do mundo, com alta performace, velocidade e durabilidade.',
    },
    {
      imagem: '../../assets/item9.png',
      titulo: 'Lixa Emborrachada Folha Roxa Cannabis',
      preco: '51,22',
      promo: 'nao',
      precoPromo: '41,22',
      quant: '30',
      miniDesc:
        'Lixa skate importada emborrachada de alta qualidade, alta resistência, auto adesiva e anti derrapante.',
    },
    {
      imagem: '../../assets/item10.png',
      titulo: 'Lixa Emborrachada Green',
      preco: '59,90',
      promo: 'nao',
      precoPromo: '25,90',
      quant: '22',
      miniDesc:
        'Lixa skate importada emborrachada de alta qualidade, alta resistência, auto adesiva e anti derrapante que propociona uma aderência impressionate para o skate.',
    },
    {
      imagem: '../../assets/item12.png',
      titulo: 'Capacete Purple Logo Preto',
      preco: '129,90',
      promo: 'nao',
      precoPromo: '100,90',
      quant: '18',
      miniDesc:
        'O capacete Purple foi desenvolvido para esportistas de alta performance, ele é indispensável para quem pratica esportes Radicais e busca proteção contra as quedas e acidentes.',
    },
    {
      imagem: '../../assets/item13.png',
      titulo: 'Capacete ARS Rookie Pink',
      preco: '139,90',
      promo: 'nao',
      precoPromo: '139,90',
      quant: '6',
      miniDesc:
        'O capacete Advenced Rider foi desenvolvido para esportistas de alta performance, ele é indispensável para quem pratica esportes Radicais e busca proteção contra as quedas.',
    },
    {
      imagem: '../../assets/skate6.png',
      titulo: 'Skate Montado Viva Meu Primeiro Amor Green White',
      preco: '299,90',
      promo: 'nao',
      precoPromo: '169,90',
      quant: '3',
      miniDesc:
        'O Skate Iniciante ”Meu Primeiro Amor” da marca Viva é a escolha perfeita para skatistas que estão dando as primeiras remadas no mundo do skate.',
    },
    {
      imagem: '../../assets/skate7.png',
      titulo: 'Semi Long Hondar 31 Polegadas Be Happy Verde',
      preco: '539,91',
      promo: 'nao',
      precoPromo: '339,91',
      quant: '5',
      miniDesc:
        'A Hondar é uma empresa direcionada por profissionais Brasileiros e comercializada em toda América Latina, incluindo Estados Unidos, Taiwan e países menores na Ásia.',
    },
    {
      imagem: '../../assets/skate8.png',
      titulo: 'Skate Montado CBGANG SKTBR Bomb Azul',
      preco: '206,91',
      promo: 'nao',
      precoPromo: '176,91',
      quant: '15',
      miniDesc:
        'Os skates CBGANG são fabricados com produtos de excelente qualidade fabricado com 7 lâmina de folha de marfim premium, Truck Profissional, Roda em Uretano 53mm, Rolamento Importado Abec.',
    },
    {
      imagem: '../../assets/item7.png',
      titulo: 'Lixa Hondar Pespective',
      preco: '67,41',
      promo: 'nao',
      precoPromo: '37,41',
      quant: '35',
      miniDesc:
        'Lixa skate Hondar Emborrachada, lixa emborrachada e com graos que evita o desgate rapido do seu tênis.',
    },
    {
      imagem: '../../assets/item8.png',
      titulo: 'Lixa Emborrachada Bud',
      preco: '44,91',
      promo: 'nao',
      precoPromo: '34,91',
      quant: '17',
      miniDesc:
        'Lixa skate importada emborrachada de alta qualidade, alta resistência, auto adesiva e anti derrapante.',
    },
    {
      imagem: '../../assets/skate9.png',
      titulo: 'Skate Montado Maple Flip Skateboards Pop Shroom Purple',
      preco: '485,91',
      promo: 'nao',
      precoPromo: '410,91',
      quant: '13',
      miniDesc:
        'Skate Montado Maple Flip Skateboards Pop Shroom Purple. A Flip é uma das marcas mais consagradas mundialmente.',
    },
    {
      imagem: '../../assets/skate10.png',
      titulo: 'Skate Montado CBGANG LINUX',
      preco: '202,41',
      promo: 'nao',
      precoPromo: '132,41',
      quant: '7',
      miniDesc:
        'Os skates CBGANG são fabricados com produtos de excelente qualidade fabricado com 7 lâmina de folha de marfim premium, Truck Profissional, Roda em Uretano 53mm, Rolamento Importado Abec.',
    },
    {
      imagem: '../../assets/item11.png',
      titulo: 'Lixa Emborrachada Snake',
      preco: '51,22',
      promo: 'nao',
      precoPromo: '31,22',
      quant: '16',
      miniDesc:
        'Lixa skate importada emborrachada de alta qualidade, alta resistência, auto adesiva e anti derrapante que propociona uma aderência impressionate para o skate.',
    },
    {
      imagem: '../../assets/item16.png',
      titulo: 'Parafuso De Base Fun',
      preco: '25,00',
      promo: 'nao',
      precoPromo: '20,00',
      quant: '75',
      miniDesc:
        'Parafuso de base street This Way || Material :aço || Tamanhos 3,0 cm',
    },
    {
      imagem: '../../assets/item17.png',
      titulo: 'Parafuso De Base Alen Independent',
      preco: '45,00',
      promo: 'nao',
      precoPromo: '30,00',
      quant: '40',
      miniDesc:
        'Independent || Material: Aço || Tamnho: 2.5cm',
    },
    {
      imagem: '../../assets/item18.png',
      titulo: 'Parafuso De Base Street',
      preco: '19,00',
      promo: 'nao',
      precoPromo: '15,00',
      quant: '9',
      miniDesc:
        'Parafuso de base street This Way || Material :aço || Tamanhos 2,5cm',
    },
  ];
}

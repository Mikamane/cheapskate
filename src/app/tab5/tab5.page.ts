import { Component, OnInit, inject } from '@angular/core';
import { AddToCartService } from '../Services/add-to-cart.service';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(private auth: Auth) {}

  cartService = inject(AddToCartService);

  addToCart() {
    this.cartService.addToCart();
  }

  logado = false;
  cad = false;
  changeForm() {
    this.cad = !this.cad;
  }

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

  user: any = { nome: '', foto: '', email: '' };
  msg: string = '';

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  logar(email: any, senha: any) {
    this.msg = '';
    if (email == '' || senha == '') {
      this.msg = 'Preencha todos os campos!';
      this.setOpen(true);
    } else {
      signInWithEmailAndPassword(this.auth, email, senha)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.user.nome = user.displayName;
          this.user.foto = user.photoURL;
          this.user.email = user.email;

          this.logado = true;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  loginComGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result);
        this.user.nome = result.user.displayName;
        this.user.foto = result.user.photoURL;
        this.user.email = result.user.email;
        this.logado = true;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  logout() {
    this.logado = false;
    this.logoutComGoogle();
  }

  logoutComGoogle() {
    signOut(this.auth);
  }

  cadUser(email: any, senha: any, Rsenha: any) {
    this.msg = '';
    if (email == '' || senha == '' || Rsenha == '') {
      this.msg = 'Preencha todos os campos!';
      this.setOpen(true);
    } else if (senha != Rsenha) {
      this.msg = 'As senhas precisam ser iguais!';
      this.setOpen(true);
    } else {
      this.msg = 'Usuário cadastrado com sucesso!';
      this.setOpen(true);
      this.changeForm();

      createUserWithEmailAndPassword(this.auth, email, senha)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}

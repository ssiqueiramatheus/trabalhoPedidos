import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public categorias = [
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 4, nome: 'Hot Dog'   },
    { codigo: 3, nome: 'Assados' }
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante. ', nome: 'Coxinha de Frango',       valor: 5.99, imagens: ['Coxinha 1.jpg', "Coxinha 1.jpg"], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Churos',                  valor: 4.99, imagens: ['Churros.jpg'], visibled: false },
    { codigo: 4, categoria: 3, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Croquete',                valor: 2.90, imagens: ['Croquete.jpg' ], visibled: false },
    { codigo: 5, categoria: 3, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Pastel de Queijo',        valor: 5.99, imagens: ['Pastel.jpg' ], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Pizza da Casa',           valor: 35.90, imagens: ['PizzaDaCasa.jpg' ], visibled: false },
    { codigo: 7, categoria: 1, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Pizza Napolitano',        valor: 38.90, imagens: ['PizzaNapolitana.jpg' ], visibled: false },
    { codigo: 8, categoria: 1, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Pizza Portuguesa',        valor: 45.90, imagens: ['PizzaPortuguesa.jpg' ], visibled: false },
    { codigo: 9, categoria: 1, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Quatro queijos',          valor: 40.90, imagens: ['PizzaQuatroQueijo.jpg' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hambúrguer Master',      valor: 30.00, imagens: ['haburger3.jpg' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hambúrguer Tradicional', valor: 25.99, imagens: ['haburger4.jpg' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hambúrguer Fome Zero',   valor: 30.99, imagens: ['haburger5.jpg' ], visibled: false },
    { codigo: 13, categoria: 4, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hot Dog Americano',      valor: 15.00, imagens: ['Americano.jpg' ], visibled: false },
    { codigo: 14, categoria: 4, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hot Dog Da Casa',        valor: 12.00, imagens: ['CachorroDaCasa.jpg' ], visibled: false },
    { codigo: 15, categoria: 4, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hot Dog Especial',       valor: 12.50, imagens: ['CachrroEspecial.jpg' ], visibled: false },
    { codigo: 16, categoria: 4, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Hot Dog de bacon',       valor: 12.50, imagens: ['CachrroQuenteBacon.jpg' ], visibled: false },
    { codigo: 17, categoria: 4, descricao: 'Salgado frito tradicionalmente brasileiro. Envolto de massa a base de trigo, recheado com frango desfiado e com um harmonioso tempero. Modelado em forma de gota e empanado com farinha de rosca para dar um toque crocante.', nome: 'Combo dois hot dog',     valor: 20.00, imagens: ['Combo 2.jpg' ], visibled: false }
  ]

  public pathImgs = '../../assets/img/';


  

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}

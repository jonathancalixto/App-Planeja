import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  planejamentos;

  constructor(){
    this.planejamentos = []

  }

  cervejas;

  ngOnInit(){}

  excluir(nome){
    localStorage.removeItem(nome)
  }

  ionViewDidEnter(){

    this.cervejas = []

    const tamanhoDoBanco = localStorage.length

    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = localStorage.key(index)
      const cerveja = localStorage.getItem(chave)
      const cervejaReal = JSON.parse(cerveja)
      
    }
    
  }

}

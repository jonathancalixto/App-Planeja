import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) {
    console.log("EXECUTOU O CONSTRUTOR")
   }

  ngOnInit() {
  }

  salvar(form){
    console.log(form.value)
    this.nav.back()
}

}

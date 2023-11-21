import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [HeroeComponent, ListaComponent],
  exports: [HeroeComponent, ListaComponent],
  imports: [CommonModule]
})
export class HeroesModule {

}

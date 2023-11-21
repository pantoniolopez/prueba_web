import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public nombresHeroes: string[] = ["Goku", "Gohan", "Piccolo", "Yamsha", "Trunks", "Mutenroshi"];
  public heroeEliminado?: string;

  public borrarUltimoHeroe(): void {
    this.heroeEliminado = this.nombresHeroes.pop();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = "Goku";
  public edad: number = 35;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  getDescripcionHeroe(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiaNombre(): void{
    this.nombre = "Vegeta";
  }

  cambiaEdad(): void{
    this.edad = 40;
  }

  public restablecerFormulario(): void {
    this.nombre = 'Goku';
    this.edad = 35;
  }
}

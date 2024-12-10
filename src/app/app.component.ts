import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';

  resultadoPadre!: number;

  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}

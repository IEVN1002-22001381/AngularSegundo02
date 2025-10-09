import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplicacion } from './multiplicacion';


@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {

  formulario!: FormGroup;
  resultado!: number;
  calculadora = new Multiplicacion();

  
  ngOnInit():void{
    this.formulario = new FormGroup({
      x1: new FormControl(),
      y1: new FormControl(),
      x2: new FormControl(),
      y2: new FormControl()
    });
  }

  calcularDistancia():void{
    this.calculadora.x1 = this.formulario.value.x1
    this.calculadora.y1 = this.formulario.value.y1;
    this.calculadora.x2 = this.formulario.value.x2;
    this.calculadora.y2 = this.formulario.value.y2;

    this.resultado = this.calculadora.calcularDistancia();
  }
}
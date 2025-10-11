import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  resultadoEdad!: number;
  resultadoSigno!: string;
  imagenSigno!: string;
  mostrarResultado: boolean = false;
  calcular = new Zodiaco();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      dia: new FormControl(),
      mes: new FormControl(),
      anio: new FormControl(),
      sexo: new FormControl()
    });
  }

  imprimirInformacion(): void {
    this.calcular.nombre = this.formulario.value.nombre;
    this.calcular.apellidoPaterno = this.formulario.value.apellidoPaterno;
    this.calcular.apellidoMaterno = this.formulario.value.apellidoMaterno;
    this.calcular.dia = this.formulario.value.dia;
    this.calcular.mes = this.formulario.value.mes;
    this.calcular.anio = this.formulario.value.anio;
    this.calcular.sexo = this.formulario.value.sexo;

    this.resultadoEdad = this.calcular.calcularEdad();
    this.resultadoSigno = this.calcular.calcularSigno();
    this.imagenSigno = this.calcular.obtenerImagen();
    
    this.mostrarResultado = true;
  }
}
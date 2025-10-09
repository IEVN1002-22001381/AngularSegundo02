export class Multiplicacion {
    x1!:number;
    x2!:number;
    y1!:number;
    y2!:number;
    diferenciaX!: number;
    diferenciaY!: number;
  calcularDistancia(): number {
    this.diferenciaX = this.x2 - this.x1;
    this.diferenciaY = this.y2 - this.y1;
    return Math.sqrt(this.diferenciaX * this.diferenciaX + this.diferenciaY * this.diferenciaY);
  }
}
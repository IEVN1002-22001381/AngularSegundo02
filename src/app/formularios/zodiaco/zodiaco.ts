export class Zodiaco {
    nombre!: string;
    apellidoPaterno!: string;
    apellidoMaterno!: string;
    dia!: number;
    mes!: number;
    anio!: number;
    sexo!: string;

    calcularEdad(): number {
         return 2025 - this.anio;
    }

    calcularSigno(): string {
        if (this.anio % 12 === 0) return "Mono";
        if (this.anio % 12 === 1) return "Gallo";
        if (this.anio % 12 === 2) return "Perro";
        if (this.anio % 12 === 3) return "Cerdo";
        if (this.anio % 12 === 4) return "Rata";
        if (this.anio % 12 === 5) return "Buey";
        if (this.anio % 12 === 6) return "Tigre";
        if (this.anio % 12 === 7) return "Conejo";
        if (this.anio % 12 === 8) return "Dragón";
        if (this.anio % 12 === 9) return "Serpiente";
        if (this.anio % 12 === 10) return "Caballo";
        return "Cabra";
    }
    obtenerImagen(): string {
        let signo = this.calcularSigno();
        
        if (signo === "Mono") return "/img/mono.png";
        if (signo === "Gallo") return "/img/gallo.png";
        if (signo === "Perro") return "/img/perro.png";
        if (signo === "Cerdo") return "/img/cerdo.png";
        if (signo === "Rata") return "/img/rata.png";
        if (signo === "Buey") return "/img/buey.png";
        if (signo === "Tigre") return "/img/tigre.png";
        if (signo === "Conejo") return "/img/conejo.png";
        if (signo === "Dragón") return "/img/dragon.png";
        if (signo === "Serpiente") return "/img/serpiente.png";
        if (signo === "Caballo") return "/img/caballo.png";
        return "/img/cabra.png";
    }
}
class Pala extends Objeto {
  constructor(x, y, ancho, alto, imagen, desplazamiento, ctx) {
    super(x, y, ancho, alto, imagen);
    this.desplazamiento = desplazamiento;
  }

  moverPala(key) {
    if (key === "ArrowLeft") {
      if (this.x > 0) {
        this.x = this.x - this.desplazamiento;
      }
    }
    if (key === "ArrowRight") {
      if (this.x < 400) {
        this.x = this.x + this.desplazamiento;
      }
    }
  }
}

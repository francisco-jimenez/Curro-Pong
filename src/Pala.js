class Pala extends Objeto {
  constructor(x, y, ancho, alto, imagen, ctx) {
    super(x, y, ancho, alto, imagen);
  }

  moverPala(key) {
    if (key === "ArrowLeft") {
      if (this.x > 0) {
        this.x = this.x - 20;
      }
    }
    if (key === "ArrowRight") {
      if (this.x < 400) {
        this.x = this.x + 20;
      }
    }
  }
}

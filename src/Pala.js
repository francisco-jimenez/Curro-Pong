class Pala extends Objeto {
  constructor(x, y, ancho, alto, imagen, desplazamiento, ctx) {
    super(x, y, ancho, alto, imagen);
    this.desplazamiento = desplazamiento;
  }

  moverPala(key) {
    if (key === "ArrowLeft") {
      if (this.comprobarPosicionEnCanvas() !== "izquierda") {
        this.x = this.x - this.desplazamiento;
      }
    }
    if (key === "ArrowRight") {
      if (this.comprobarPosicionEnCanvas() !== "derecha") {
        this.x = this.x + this.desplazamiento;
      }
    }
  }
}

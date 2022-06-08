class Pelota extends Objeto {
  constructor(x, y, ancho, alto, imagen, velocidad, ctx) {
    super(x, y, ancho, alto, imagen, ctx);
    this.direccionX = "derecha";
    this.direccionY = "abajo";
    this.velocidad = velocidad;
  }

  moverPelota() {
    let situacionEnElCanvas = this.comprobarPosicionEnCanvas();
    if (situacionEnElCanvas === "derecha") {
      this.direccionX = "izquierda";
    }
    if (situacionEnElCanvas === "izquierda") {
      this.direccionX = "derecha";
    }
    if (situacionEnElCanvas === "arriba") {
      this.direccionY = "abajo";
    }
    if (situacionEnElCanvas === "abajo") {
      this.direccionY = "arriba";
    }
    if (this.direccionX === "derecha") {
      this.x += this.velocidad;
    }
    if (this.direccionX === "izquierda") {
      this.x -= this.velocidad;
    }
    if (this.direccionY === "arriba") {
      this.y -= this.velocidad;
    }
    if (this.direccionY === "abajo") {
      this.y += this.velocidad;
    }
  }
}

class Objeto {
  constructor(x, y, ancho, alto, imagen, ctx) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
    this.direccionX = "derecha";
    this.direccionY = "abajo";
    this.ctx = ctx;
  }

  dibujar() {
    ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  borrar() {
    ctx.clearRect(this.x, this.y, this.ancho, this.alto);
  }

  detectarColision = (otroObjeto) => {
    if (otroObjeto.y + otroObjeto.alto < this.y) {
      return "";
    }
    if (otroObjeto.x + otroObjeto.ancho < this.x) {
      return "";
    }
    if (this.y + this.alto < otroObjeto.y) {
      return "";
    }
    if (this.x + this.ancho < otroObjeto.x) {
      return "";
    }

    return "colision";
  };

  comprobarPosicionEnCanvas() {
    if (this.x >= ctx.canvas.width - this.ancho) {
      return "derecha";
    }
    if (this.x <= 0) {
      return "izquierda";
    }
    if (this.y <= 0) {
      return "arriba";
    }
    if (this.y >= ctx.canvas.width - this.ancho) {
      return "abajo";
    }
    return "dentro";
  }
}
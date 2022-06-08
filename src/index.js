const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let pelotaImage = new Image();
pelotaImage.src = "src/Pelota.png";

let palaImage = new Image();
palaImage.src = "src/Pala.png";

let pala = new Pala(200, 500, 200, 100, palaImage, 10, ctx);
let pelota = new Pelota(300, 200, 30, 30, pelotaImage, 10, ctx);

const cargaInicial = () => {
  pala.dibujar();
  pelota.dibujar();

  const cambiarDireccionSiColision = () => {
    if (pala.detectarColision(pelota) === "colision-superior") {
      pelota.direccionY = "arriba";
    }
    if (pala.detectarColision(pelota) === "colision-izquierda") {
      pelota.direccionX = "izquierda";
    }
    if (pala.detectarColision(pelota) === "colision-derecha") {
      pelota.direccionX = "derecha";
    }
  };

  const moverPelota = () => {
    pelota.borrar();
    pelota.moverPelota();
    console.log(pelota.comprobarPosicionEnCanvas());
    console.log(pala.detectarColision(pelota));
    cambiarDireccionSiColision();
    pelota.dibujar();
  };

  setInterval(moverPelota, 40);
};

const logKey = (e) => {
  e.preventDefault();
  pala.borrar();
  pala.moverPala(e.key);
  pala.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);

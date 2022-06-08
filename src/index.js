const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let pelotaImage = new Image();
pelotaImage.src = "src/Pelota.png";

let palaImage = new Image();
palaImage.src = "src/Pala.png";

let pala = new Pala(200, 500, 200, 100, palaImage, ctx);
let pelota = new Pelota(100, 200, 30, 30, pelotaImage, 10, ctx);

const cargaInicial = () => {
  pala.dibujar();
  pelota.dibujar();

  const detectarColision = () => {
    if (pelota.y == 470) {
      if (pala.x < pelota.x && pala.x + pala.ancho > pelota.x) {
        pelota.direccionY = "arriba";
      }
    }
  };

  const moverPelota = () => {
    pelota.borrar();
    pelota.moverPelota();
    console.log(pelota.comprobarPosicionEnCanvas());
    console.log(pala.detectarColision(pelota));
    detectarColision();
    pelota.dibujar();
  };

  setInterval(moverPelota, 200);
};

const logKey = (e) => {
  e.preventDefault();
  pala.borrar();
  pala.moverPala(e.key);
  pala.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);

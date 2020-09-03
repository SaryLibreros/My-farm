var v = document.getElementById("villaplatzi"); //me trae a html
var papel = v.getContext("2d"); //la dimension
document.addEventListener("keydown", dibujarTeclado); //reconocimiento del undir teclas

var teclas = { UP:38, DOWN:40, LEFT:37, RIGHT:39}; //teclas de dirección
var cerdo_x = aleatorio(0, 420); // defino rango posicion cerdo
var cerdo_y = aleatorio(0, 420);
var xv = aleatorio(0, 420); //defino rango para cada posicion
var yv = aleatorio(0, 420);
var xp = aleatorio(1, 350); //defino rango para cada posicion
var yp = aleatorio(1, 350);

var tile = { url:"tile.png", cargaOK:false}; // nombrar imagenes del pc que quiero cargar
var vaca = { url: "vaca.png", cargaOK:false};
var pollo = { url:"pollo.png", cargaOK:false};
var cerdo = { url:"cerdo.png", cargaOK:false};

tile.imagen = new Image(); //cargar imagenes que ya mencione
tile.imagen.src = tile.url; //disparo el evento de carga
tile.imagen.addEventListener("load", cargarTile); // evento y función a dibujar

vaca.imagen = new Image();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener ("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarTile() //dibujo cada vez que tengo algo listo o cargado
{tile.cargaOK = true;
  dibujar();}

function cargarVaca()
{vaca.cargaOK =true;
  dibujar();}

function cargarPollo()
{pollo.cargaOK= true;
  dibujar();}

function cargarCerdo()
{cerdo.cargaOK = true;
  dibujar();}

function dibujar() //si esta cargado, procedo a dibujarlo
{
  if(tile.cargaOK)
  {dibujarTile();}
  if (vaca.cargaOK)
  {dibujarVaca();}
  if (pollo.cargaOK)
  {dibujarPollo();}
  if (cerdo.cargaOK)
  {dibujarCerdo(cerdo_x, cerdo_y);}
}

function dibujarTile() //a la villa la pongo en posicion inicial por eos no necesita x o y
{papel.drawImage(tile.imagen, 0, 0);}

function dibujarCerdo(cerdo_x, cerdo_y) //al cerdo le pongo coordenadas especiales
{papel.drawImage(cerdo.imagen, cerdo_x, cerdo_y);}

function dibujarPollo() // coordenadas libres
{papel.drawImage(pollo.imagen, xp, yp);}

function dibujarVaca() //coordenadas libres
{papel.drawImage(vaca.imagen, xv, yv);}


function dibujarTeclado(evento) //para dibujar con el teclado
{
  var movcerdo = 1;
  switch(evento.keyCode)
  {
    case teclas.UP: //hago la posicion de cada animal en cada tecla
    dibujarTile();
    dibujarVaca(xv , yv);
    dibujarPollo(xp, yp);
    dibujarCerdo(cerdo_x, cerdo_y - movcerdo);
    cerdo_y= cerdo_y - movcerdo;
    break;

    case teclas.DOWN:
    dibujarTile();
    dibujarVaca(xv, yv);
    dibujarPollo(xp, yp);
    dibujarCerdo(cerdo_x, cerdo_y + movcerdo);
    cerdo_y = cerdo_y + movcerdo;
    break;

    case teclas.LEFT:
    dibujarTile();
    dibujarVaca(xv, yv);
    dibujarPollo(xp, yp);
    dibujarCerdo(cerdo_x - movcerdo, cerdo_y);
    cerdo_x = cerdo_x - movcerdo;
    break;

    case teclas.RIGHT:
    dibujarTile();
    dibujarVaca(xv, yv);
    dibujarPollo(xp, yp);
    dibujarCerdo(cerdo_x + movcerdo, cerdo_y);
    cerdo_x = cerdo_x + movcerdo;
    break;
  }
}
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];
console.log("hi");

let lista = document.getElementsByTagName("ul").item(0);

fillList(lista);

function fillList(list) {
  const textDiv2 = "Muestra";
  for (let i = 0; i < colorList.length; i++) {
    let txtDiv1 = colorList[i].colorName;
    let colorDiv2 = colorList[i].hex;

    let div1 = document.createElement("div");
    div1.innerText = txtDiv1;
    div1.classList.add("color-name");
    div1.addEventListener("click",function(){clickDiv(txtDiv1)},true)
    let div2 = document.createElement("div");
    div2.classList.add("color-show");
    div2.innerText = textDiv2;
    div2.style.backgroundColor = colorDiv2;

    let boton1 = document.createElement("button");
    boton1.innerText = "Next Item Color";
    boton1.classList.add("color-set");
    boton1.addEventListener("click",function(){clickNext(colorDiv2,txtDiv1),false})
    let boton2 = document.createElement("button");
    boton2.innerText = "Page Color";
    boton2.classList.add("color-set");
    boton2.addEventListener("click", function(){setColor(colorDiv2)}, false);

    let element = document.createElement("li");
    element.append(div1);
    element.append(div2);
    element.append(boton1);
    element.append(boton2);
    element.classList.add("color-item");

    if (i % 2 == 1) {
      element.classList.add("color-item--odd");
    }
    list.append(element);

  }
}


function clickBody(){
  alert("BODY");
};

document.getElementsByTagName("body").item(0).addEventListener("click",clickBody, false);

function clickDiv(color){
  alert(color);
}

function clickNext(color, name){
  let newList = lista.children;
  for(let i = 1;i<newList.length;i++){
    let elemento = newList.item(i);
    if(elemento.getElementsByTagName("div").item(0).textContent == name){
      if(i == 8){
        elemento = newList.item(1).style.backgroundColor = color;
      }
      else{
        elemento.nextSibling.style.backgroundColor = color;
      }
    }
  }
}

function setColor(color){
  let cuerpo = document.getElementsByTagName("body").item(0);
  cuerpo.style.backgroundColor = color;
}
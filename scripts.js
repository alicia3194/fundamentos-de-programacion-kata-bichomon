console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const toReplace = document.querySelector("#gen-1");
toReplace.textContent = "Generasión 1 Pokimon";

// Cambia el color de fondo de la primera generación de Pokimon.

const color = document.querySelectorAll(".infocard");
for (let i = 0; i < color.length; i++) {
  color[i].style.backgroundColor = "#F7ACCF";
}

// Imprime por consola la URL de la página.

const url1 = document.location.href;
console.log(url1);

// Imprime por consola el dominio de la página.

const domi = document.location.hostname;
console.log(domi);

// Imprime todos los nodos de imagen.
const nodos = document.querySelectorAll(".infocard-lg-img");
console.log(nodos);

// Sustituye el atributo "src" de todas las
// imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let imagenes = document.querySelectorAll("img");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let pokemon = document.querySelectorAll(
  ".infocard-lg-data.text-muted > small > .itype.flying"
);
for (let i = 0; i < pokemon.length; i++) {
  pokemon[i].parentElement.parentElement.style.backgroundColor = "blue";
}

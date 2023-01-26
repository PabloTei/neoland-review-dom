// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);

for (const country of countries) {
    let lista = document.createElement("li");
    listaDesordenada.appendChild(lista);
    lista.insertAdjacentHTML("afterbegin", country);
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementRemove = document.querySelector(".fn-remove-me");
elementRemove.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const listaDesordenadaDos = document.createElement("ul"); //Creamos lista desordenada
const divUno = document.querySelector('[data-function= "printHere"]') //Localizamos el div donde queremos meter la ul
divUno.appendChild(listaDesordenadaDos); //Metemos el ul en el div que nos pide en el enunciado

for (const car of cars) { //Creamos un bucle para recorrer el array
    let listaDos = document.createElement("li"); //creamos un li por cada elemento que tenga el array
    listaDesordenadaDos.appendChild(listaDos); //Por cada elemento que tenga el array añadimos el li dentro del ul
    listaDos.insertAdjacentHTML("afterbegin", car); //Metemos dentro de cada elemento (li) cada elemento del array
}


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let = 0;
for (const country of countries1) {
    const createDiv = document.createElement("div"); //Creamos por cada elemento del array, guardado en memoria
    document.body.appendChild(createDiv); //Añadimos el div en el body del DOM
    const createList = document.createElement("li"); // Creamos por cada elemento del array una lista, guardado en memoria
    createList.setAttribute("class", "modificable");// Añadimos una clase para facilitar el ejercicio 1.6
    createDiv.appendChild(createList); //Añadimos en la posición dentro del div la lista por cada elemento del array
    const tituloH4 = document.createElement("h4"); //Creamos por cada elemento del array el titulo, guardado en memoria
    createList.appendChild(tituloH4); //Añadimos dentro la lista el titulo de cada elemento del array
    const img1 = document.createElement("img"); //Creamos por cada elemento del array una imagen, guardado en memoria
    createList.appendChild(img1); //Añadimos dentro la lista la imagen de cada elemento del array
    tituloH4.insertAdjacentHTML("afterbegin", country.title);//Imprimimos el titulo
    img1.setAttribute("src", country.imgUrl); //Añadimos atributo src para que imprima las imágenes
    img1.insertAdjacentHTML("afterbegin", country.imgUrl);//Imprimimos la imagen
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const boton = document.createElement("button");//Creamos botón
document.body.appendChild(boton);//Añadimos botón al DOM
const divs = document.querySelectorAll("div");//Almacenamos todos lod DIVS
for (let i = 0; i < divs.length; i++) {//Creamos bucle para que cuando llegue a la ultima posición a ese div le asigne el id "ultimo"
    if(i === divs.length - 1) {
        const ultimoDiv = divs[i].setAttribute("id", "ultimo");
        
    }
}
boton.addEventListener("click", (event) => {
     //Creamos el evento click
    const ultimo = document.querySelector("#ultimo");//Metemos en una variable el div con el id "ultimo"
    ultimo.remove();// eliminamos el div con la variable ultimo
});



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const newList = document.querySelectorAll(".modificable");

for (const list of newList) {
    const newButton = document.createElement("button");
    list.appendChild(newButton);
}
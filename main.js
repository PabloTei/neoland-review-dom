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







// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.











// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

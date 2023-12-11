// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementsByName("lista-de-productos")[0]; // se coloca [0] para obtener el primer elemento de la coleccion
const $i = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button"); // se desplazo el evento onclick


for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div") // cambiar la declaracion de las variables var por let o const, en este caso y los siguientes usare const para evitar que cambie el valor de la variable
  d.classList.add("producto")

  const ti = document.createElement("p") // var por const
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  const imagen = document.createElement("img"); // var por const
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

// displayProductos(productos) // Esta linea esta llamando a una funcion que no esta definida previamente, por lo tanto se puede eliminar


botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div") // var por const
    d.classList.add("producto")
  
    const ti = document.createElement("p") // var por const
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img"); // var por const
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  
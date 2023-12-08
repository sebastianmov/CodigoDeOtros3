const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ];
  
  const li = document.querySelector("lista-de-productos");
  const $i = document.querySelector('.input');
  
  for (let i = 0; i < productos.length; i++) {
    const d = crearElementoProducto(productos[i]);
    li.appendChild(d);
  }
  
  $i.addEventListener('input', function() {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    const texto = $i.value;
    const productosFiltrados = filtrado(productos, texto);
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      const d = crearElementoProducto(productosFiltrados[i]);
      li.appendChild(d);
    }
  });
  
  function crearElementoProducto(producto) {
    const d = document.createElement("div");
    d.classList.add("producto");
  
    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;
  
    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    return d;
  }
  
  function filtrado(productos = [], texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }
  

/* ==================================================
   FARMACIA LA ESQUINA
   Catálogo de productos y carrito de compras
================================================== */


/* 1. LISTA DE PRODUCTOS */

const productos = [
    {
        id: 1,
        nombre: "Paracetamol",
        precio: 150,
        categoria: "Medicamentos",
        imagen: "paracetamol.jpg"
    },
    {
        id: 2,
        nombre: "Ibuprofeno",
        precio: 180,
        categoria: "Medicamentos",
        imagen: "ibuprofen.jpg"
    },
    {
        id: 3,
        nombre: "Vitamina C",
        precio: 250,
        categoria: "Vitaminas",
        imagen: "vitamina-c.500.jpg"
    },
    {
        id: 4,
        nombre: "Multivitaminas",
        precio: 350,
        categoria: "Vitaminas",
        imagen: "meskesson.jpg"
    },
    {
        id: 5,
        nombre: "Alcohol antiséptico",
        precio: 100,
        categoria: "Higiene",
        imagen: "alcoholantiseptico.jpg"
    },
    {
        id: 6,
        nombre: "Gel antibacterial",
        precio: 125,
        categoria: "Higiene",
        imagen: "gel-antibacterial.jpg"
    }
];


/* 2. VARIABLES DEL CARRITO */

let carrito = [];


/* 3. CONECTAR CON EL HTML */

const contenedor = document.getElementById("lista-productos");
const buscador = document.getElementById("buscador");

const contador = document.getElementById("contador");
const total = document.getElementById("total");

const productosCarrito = document.getElementById("productos-carrito");
const botonVaciar = document.getElementById("vaciar");


/* 4. FORMATO DE PRECIOS */

const formatoPrecio = new Intl.NumberFormat("es-DO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function mostrarPrecio(cantidad) {
    return "RD$ " + formatoPrecio.format(cantidad);
}


/* 5. RUTA DE LAS IMÁGENES */

const rutaImagen = window.location.pathname.includes("/pages/")
    ? "../img/"
    : "img/";


/* 6. MOSTRAR PRODUCTOS */

function mostrarProductos(lista) {

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No encontramos productos.</p>";
        return;
    }

    lista.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <img
                class="imagen-producto"
                src="${rutaImagen}${producto.imagen}"
                alt="${producto.nombre}"
                onerror="this.alt='Imagen no encontrada: ' + this.src"
            >

            <h3>${producto.nombre}</h3>

            <p>${producto.categoria}</p>

            <strong class="precio">
                ${mostrarPrecio(producto.precio)}
            </strong>

            <button type="button" onclick="agregarCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;

        contenedor.appendChild(tarjeta);

    });
}


/* 7. AGREGAR PRODUCTOS AL CARRITO */

function agregarCarrito(id) {

    const productoEncontrado = productos.find(producto => producto.id === id);

    if (!productoEncontrado) return;

    const productoEnCarrito = carrito.find(producto => producto.id === id);

    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

    } else {

        carrito.push({
            ...productoEncontrado,
            cantidad: 1
        });

    }

    actualizarCarrito();
}


/* 8. ACTUALIZAR EL CARRITO */

function actualizarCarrito() {

    if (!contador || !total || !productosCarrito) return;

    let cantidadTotal = 0;
    let precioTotal = 0;

    productosCarrito.innerHTML = "";

    if (carrito.length === 0) {

        productosCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";

    }

    carrito.forEach(producto => {

        cantidadTotal += producto.cantidad;

        precioTotal += producto.precio * producto.cantidad;

        const elemento = document.createElement("p");

        elemento.textContent =
            `${producto.nombre} x ${producto.cantidad} — ${mostrarPrecio(producto.precio * producto.cantidad)}`;

        productosCarrito.appendChild(elemento);

    });

    contador.textContent = cantidadTotal;

    total.textContent = mostrarPrecio(precioTotal);
}


/* 9. BUSCADOR DE PRODUCTOS */

if (buscador) {

    buscador.addEventListener("input", function () {

        const texto = buscador.value.toLowerCase().trim();

        const productosFiltrados = productos.filter(producto => {

            return (
                producto.nombre.toLowerCase().includes(texto) ||
                producto.categoria.toLowerCase().includes(texto)
            );

        });

        mostrarProductos(productosFiltrados);

    });

}


/* 10. VACIAR CARRITO */

if (botonVaciar) {

    botonVaciar.addEventListener("click", function () {

        carrito = [];

        actualizarCarrito();

    });

}


/* 11. INICIAR LA PÁGINA */

mostrarProductos(productos);

actualizarCarrito();

console.log("Farmacia La Esquina: JavaScript cargado correctamente.");

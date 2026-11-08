
/* ==================================================
   FARMACIA LA ESQUINA
   MINIMARKET - Catálogo, filtros y carrito
================================================== */


/* 1. CATÁLOGO DE PRODUCTOS */

const productosMini = [
    {
        id: 1,
        nombre: "Häagen-Dazs Cookies & Cream",
        precio: 274.40,
        categoria: "Helados",
        presentacion: "100 ml",
        imagen: "dazs-cookies-cream.jpg"
    },
    {
        id: 2,
        nombre: "Häagen-Dazs Vainilla",
        precio: 659.36,
        categoria: "Helados",
        presentacion: "32 oz",
        imagen: "vainilla-32oz.jpg"
    },
    {
        id: 3,
        nombre: "Häagen-Dazs Chocolate",
        precio: 659.36,
        categoria: "Helados",
        presentacion: "32 oz",
        imagen: "chocolate-32oz.jpg"
    },
    {
        id: 4,
        nombre: "Häagen-Dazs Strawberry",
        precio: 274.40,
        categoria: "Helados",
        presentacion: "4 oz",
        imagen: "strawberry-mini.jpg"
    },
    {
        id: 5,
        nombre: "Häagen-Dazs Chocolate Pints",
        precio: 543.14,
        categoria: "Helados",
        presentacion: "16 oz",
        imagen: "chocolate-pint.jpg"
    },
    {
        id: 6,
        nombre: "Häagen-Dazs Strawberry Pints",
        precio: 543.14,
        categoria: "Helados",
        presentacion: "16 oz",
        imagen: "strawberry-pint.jpg"
    },
    {
        id: 7,
        nombre: "Häagen-Dazs Vainilla Pints",
        precio: 609.00,
        categoria: "Helados",
        presentacion: "16 oz",
        imagen: "vainilla-pint.jpg"
    },
    {
        id: 8,
        nombre: "Gamesa Florentina con Cajeta",
        precio: 71.93,
        categoria: "Galletas",
        presentacion: "83 g",
        imagen: "gamesa-florentina.jpg"
    },
    {
        id: 9,
        nombre: "Häagen-Dazs Macadamia",
        precio: 605.10,
        categoria: "Helados",
        presentacion: "16 oz",
        imagen: "macadamia.jpg"
    },
    {
        id: 10,
        nombre: "Häagen-Dazs Belgian Chocolate Mini Cup",
        precio: 274.40,
        categoria: "Helados",
        presentacion: "4 oz",
        imagen: "belgian-chocolate.jpg"
    },
    {
        id: 11,
        nombre: "Häagen-Dazs Coffee Mini Cup",
        precio: 274.40,
        categoria: "Helados",
        presentacion: "4 oz",
        imagen: "coffee-mini.jpg"
    },
    {
        id: 12,
        nombre: "Rica Naranja 200 ml Jugo",
        precio: 34.22,
        categoria: "Bebidas",
        imagen: "rica-naranja-200ml.jpg"
    },
    {
        id: 13,
        nombre: "Rica Néctar Guayaba 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-guayaba-200ml.jpg"
    },
    {
        id: 14,
        nombre: "Rica Cóctel de Néctares 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-coctel-200ml.jpg"
    },
    {
        id: 15,
        nombre: "Rica Manzana 200 ml Jugo",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-manzana-200ml.jpg"
    },
    {
        id: 16,
        nombre: "Rica Piña Guayaba 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-pina-guayaba-200ml.jpg"
    },
    {
        id: 17,
        nombre: "Rica Néctar de Pera 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-pera-200ml.jpg"
    },
    {
        id: 18,
        nombre: "Rica Fruit Punch 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-fruit-punch-200ml.jpg"
    },
    {
        id: 19,
        nombre: "Rica Néctar de Mango 200 ml",
        precio: 27.68,
        categoria: "Bebidas",
        imagen: "rica-mango-200ml.jpg"
    },
    {
        id: 20,
        nombre: "Dasani Agua 1.5 L",
        precio: 60.31,
        categoria: "Bebidas",
        imagen: "dasani-agua-15l.jpg"
    },
    {
        id: 21,
        nombre: "Nescafé Cappuccino 7 oz",
        precio: 90.00,
        categoria: "Bebidas",
        imagen: "nescafe-cappuccino.jpg"
    },
    {
        id: 22,
        nombre: "Twinings Té Orange Cinnamon 25 unidades",
        precio: 288.39,
        categoria: "Bebidas",
        imagen: "twinings-orange-cinnamon.jpg"
    },
    {
        id: 23,
        nombre: "Twinings Té Green Mint 25 unidades",
        precio: 288.39,
        categoria: "Bebidas",
        imagen: "twinings-green-mint.jpg"
    },
    {
        id: 24,
        nombre: "Listamilk Leche Líquida 250 ml",
        precio: 36.40,
        categoria: "Bebidas",
        imagen: "listamilk-250ml.jpg"
    },
    {
        id: 25,
        nombre: "Mama Jugo de Piña 12 oz",
        precio: 93.32,
        categoria: "Bebidas",
        imagen: "mama-jugo-pina.jpg"
    },
    {
        id: 26,
        nombre: "Yoka Morir Soñando 0% 8 oz",
        precio: 47.83,
        categoria: "Bebidas",
        imagen: "yoka-morir-sonando.jpg"
    },
    {
        id: 27,
        nombre: "Yoka Piña Colada 0% 8 oz",
        precio: 47.83,
        categoria: "Bebidas",
        imagen: "yoka-pina-colada.jpg"
    },
    {
        id: 28,
        nombre: "Rica Fruit Punch 16 oz",
        precio: 47.99,
        categoria: "Bebidas",
        imagen: "rica-fruit-punch-16oz.jpg"
    },
    {
        id: 29,
        nombre: "Red Bull Energy Drink 250 ml",
        precio: 121.07,
        categoria: "Bebidas",
        imagen: "red-bull-250ml.jpg"
    },
    {
        id: 30,
        nombre: "Rica Pera 16 oz",
        precio: 47.99,
        categoria: "Bebidas",
        imagen: "rica-pera-16oz.jpg"
    },
    {
        id: 31,
        nombre: "Mott's Jugo de Manzana 10 oz",
        precio: 125.83,
        categoria: "Bebidas",
        imagen: "jugo-mottss.jpg"
    },
    {
        id: 32,
        nombre: "Coca-Cola Original 2 L",
        precio: 108.75,
        categoria: "Bebidas",
        imagen: "coca-cola-2l.jpg"
        },
        {
        id: 33,
        nombre: "Arcor Bon o Bon Leche",
        precio: 12.95,
        categoria: "Dulces",
        presentacion: "15 g (1 unidad)",
        imagen: "bon-o-bon-leche.png"
    },
    {
        id: 34,
        nombre: "Aviva Galleta Integral Whole Wheat",
        precio: 133.97,
        categoria: "Galletas",
        presentacion: "35 g",
        imagen: "aviva-integral.jpg"
    },
    {
        id: 35,
        nombre: "Aviva Galleta Multicereal con Miel",
        precio: 133.97,
        categoria: "Galletas",
        presentacion: "40 g",
        imagen: "aviva-multicereal.jpg"
    },
    {
        id: 36,
        nombre: "Baked in Brooklyn Pita Chips Sour Cream & Onion",
        precio: 268.76,
        categoria: "Snacks",
        presentacion: "8 oz",
        imagen: "pita-chips.jpg"
    },
    {
        id: 37,
        nombre: "Baskin Robbins Cookies & Cream",
        precio: 967.84,
        categoria: "Helados",
        presentacion: "1 litro",
        imagen: "baskin-cookies-cream.jpg"
    },
    {
        id: 38,
        nombre: "Baskin Robbins Helado de Chocolate",
        precio: 967.84,
        categoria: "Helados",
        presentacion: "1 litro",
        imagen: "baskin-chocolate.jpg"
      
    }, 
    
           {
        id: 39,
        nombre: "Chips Tostitos Santa Elena",
        precio: 285.00,
        categoria: "Snacks",
        presentacion: "Consultar tamaño",
        imagen: "Chips Tostitos Santa Elena.jpg"
    },
    

];




/* 2. CONFIGURACIÓN */

const formatoPrecioMini = new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2
});

let carritoMini = JSON.parse(
    localStorage.getItem("minimarketCarrito")
) || [];

let categoriaActualMini = "Todos";
let vistaActualMini = "cuadricula";
let paginaActualMini = 1;


/* 3. ELEMENTOS HTML */

const listaMini = document.getElementById("lista-minimarket");
const buscadorMini = document.getElementById("buscador-minimarket");
const ordenarMini = document.getElementById("ordenar-minimarket");
const cantidadPorPaginaMini = document.getElementById("productos-por-pagina");
const cantidadMini = document.getElementById("cantidad-minimarket");
const paginacionMini = document.getElementById("paginacion-minimarket");

const contadorMini = document.getElementById("contador-minimarket");
const panelCarritoMini = document.getElementById("panel-carrito");
const fondoCarritoMini = document.getElementById("fondo-carrito-mini");
const productosCarritoMini = document.getElementById("productos-carrito-mini");
const totalMini = document.getElementById("total-minimarket");


/* 4. GUARDAR CARRITO */

function guardarCarritoMini() {
    localStorage.setItem(
        "minimarketCarrito",
        JSON.stringify(carritoMini)
    );
}


/* 5. MOSTRAR PRODUCTOS */

function mostrarProductosMini() {

    if (!listaMini) return;

    let productosFiltrados = [...productosMini];

    const busqueda = buscadorMini.value.toLowerCase().trim();

    if (categoriaActualMini !== "Todos") {
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.categoria === categoriaActualMini
        );
    }

    if (busqueda) {
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.nombre.toLowerCase().includes(busqueda) ||
            producto.categoria.toLowerCase().includes(busqueda)
        );
    }

    if (ordenarMini.value === "nombre") {
        productosFiltrados.sort((a, b) =>
            a.nombre.localeCompare(b.nombre)
        );
    }

    if (ordenarMini.value === "menor-precio") {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
    }

    if (ordenarMini.value === "mayor-precio") {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
    }

    const porPagina = Number(cantidadPorPaginaMini.value) || 30;
    const totalPaginas = Math.ceil(productosFiltrados.length / porPagina);

    if (paginaActualMini > totalPaginas) {
        paginaActualMini = Math.max(1, totalPaginas);
    }

    const inicio = (paginaActualMini - 1) * porPagina;

    const productosPagina = productosFiltrados.slice(
        inicio,
        inicio + porPagina
    );

    cantidadMini.textContent =
        `${productosFiltrados.length} productos disponibles`;

    if (productosPagina.length === 0) {
        listaMini.innerHTML = `
            <p>No encontramos productos con esa búsqueda.</p>
        `;
        paginacionMini.innerHTML = "";
        return;
    }

    listaMini.innerHTML = productosPagina.map(producto => `
        <article class="tarjeta-minimarket">

            <img
               src="../img/${producto.imagen}"
               alt="${producto.nombre}"
               loading="lazy"
            
            >

            <div class="info-minimarket">

                <h3>${producto.nombre}</h3>

                <p>${producto.presentacion || ""}</p>

                <p class="precio-minimarket">
                    ${formatoPrecioMini.format(producto.precio)}
                </p>

                <button
                    type="button"
                    class="boton-agregar-mini"
                    data-id="${producto.id}">
                    Añadir al carrito
                </button>

            </div>
        </article>
    `).join("");

    mostrarPaginacionMini(totalPaginas);
}


/* 6. PAGINACIÓN */

function mostrarPaginacionMini(totalPaginas) {

    paginacionMini.innerHTML = "";

    for (let pagina = 1; pagina <= totalPaginas; pagina++) {

        const boton = document.createElement("button");

        boton.textContent = pagina;

        if (pagina === paginaActualMini) {
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {
            paginaActualMini = pagina;
            mostrarProductosMini();
        });

        paginacionMini.appendChild(boton);
    }
}


/* 7. AGREGAR AL CARRITO */

listaMini.addEventListener("click", function(evento) {

    const boton = evento.target.closest(".boton-agregar-mini");

    if (!boton) return;

    const id = Number(boton.dataset.id);

    const producto = productosMini.find(item => item.id === id);

    if (!producto) return;

    const productoExistente = carritoMini.find(item => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carritoMini.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            presentacion: producto.presentacion,
            cantidad: 1
        });
    }

    guardarCarritoMini();
    actualizarCarritoMini();

    boton.textContent = "¡Agregado!";

    setTimeout(() => {
        boton.textContent = "Añadir al carrito";
    }, 1000);
});


/* 8. ACTUALIZAR CARRITO */

function actualizarCarritoMini() {

    const cantidadTotal = carritoMini.reduce(
        (suma, producto) => suma + producto.cantidad,
        0
    );

    const precioTotal = carritoMini.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    contadorMini.textContent = cantidadTotal;

    totalMini.textContent = formatoPrecioMini.format(precioTotal);

    if (carritoMini.length === 0) {
        productosCarritoMini.innerHTML = `
            <p>Tu carrito está vacío.</p>
        `;
    } else {

        productosCarritoMini.innerHTML = carritoMini.map(producto => `
            <div style="
                border-bottom:1px solid #e0e7e0;
                padding:12px 0;
            ">

                <strong>${producto.nombre}</strong>

                <p>${producto.presentacion}</p>

                <p>
                    ${formatoPrecioMini.format(producto.precio)}
                    × ${producto.cantidad}
                </p>

                <button
                    type="button"
                    data-restar="${producto.id}">
                    −
                </button>

                <button
                    type="button"
                    data-sumar="${producto.id}">
                    +
                </button>

                <button
                    type="button"
                    data-eliminar="${producto.id}">
                    Eliminar
                </button>

            </div>
        `).join("");
    }

    guardarCarritoMini();
}


/* 9. CONTROLES DE CANTIDAD Y ELIMINACIÓN */

productosCarritoMini.addEventListener("click", function(evento) {

    const boton = evento.target.closest("button");

    if (!boton) return;

    const id = Number(
        boton.dataset.sumar ||
        boton.dataset.restar ||
        boton.dataset.eliminar
    );

    const producto = carritoMini.find(item => item.id === id);

    if (!producto) return;

    if (boton.dataset.sumar) {
        producto.cantidad++;
    }

    if (boton.dataset.restar) {
        producto.cantidad--;

        if (producto.cantidad <= 0) {
            carritoMini = carritoMini.filter(item => item.id !== id);
        }
    }

    if (boton.dataset.eliminar) {
        carritoMini = carritoMini.filter(item => item.id !== id);
    }

    actualizarCarritoMini();
});


/* 10. ABRIR Y CERRAR CARRITO */

document.getElementById("abrir-carrito").addEventListener("click", () => {
    panelCarritoMini.classList.add("abierto");
    fondoCarritoMini.classList.add("visible");
});

document.getElementById("cerrar-carrito").addEventListener("click", cerrarCarritoMini);

fondoCarritoMini.addEventListener("click", cerrarCarritoMini);

function cerrarCarritoMini() {
    panelCarritoMini.classList.remove("abierto");
    fondoCarritoMini.classList.remove("visible");
}


/* 11. VACIAR CARRITO */

document.getElementById("vaciar-carrito-mini").addEventListener("click", () => {

    if (carritoMini.length === 0) return;

    carritoMini = [];

    actualizarCarritoMini();
});


/* 12. BUSCADOR */

buscadorMini.addEventListener("input", () => {
    paginaActualMini = 1;
    mostrarProductosMini();
});


/* 13. ORDENAR PRODUCTOS */

ordenarMini.addEventListener("change", () => {
    paginaActualMini = 1;
    mostrarProductosMini();
});


/* 14. PRODUCTOS POR PÁGINA */

cantidadPorPaginaMini.addEventListener("change", () => {
    paginaActualMini = 1;
    mostrarProductosMini();
});


/* 15. FILTRAR POR CATEGORÍA */

document.querySelectorAll(".categoria-mini").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".categoria-mini").forEach(item => {
            item.classList.remove("activo");
        });

        boton.classList.add("activo");

        categoriaActualMini = boton.dataset.categoria;

        paginaActualMini = 1;

        mostrarProductosMini();
    });
});


/* 16. CAMBIAR VISTA */

document.querySelectorAll(".vista-mini").forEach(boton => {

    boton.addEventListener("click", () => {

        document.querySelectorAll(".vista-mini").forEach(item => {
            item.classList.remove("activo");
        });

        boton.classList.add("activo");

        vistaActualMini = boton.dataset.vista;

        listaMini.classList.remove(
            "vista-lista",
            "vista-tabla"
        );

        if (vistaActualMini === "lista") {
            listaMini.classList.add("vista-lista");
        }

        if (vistaActualMini === "tabla") {
            listaMini.classList.add("vista-tabla");
        }
    });
});


/* 17. ENVIAR PEDIDO POR WHATSAPP */

document.getElementById("enviar-whatsapp-mini").addEventListener("click", () => {

    if (carritoMini.length === 0) {
        alert("Agrega productos al carrito antes de enviar el pedido.");
        return;
    }

    // Sustituir por el número real de WhatsApp de la farmacia.
    const numeroWhatsApp = "18095551234";

    let mensaje = "Hola, Farmacia La Esquina. Quiero realizar este pedido:\n\n";

    carritoMini.forEach(producto => {
        mensaje += `${producto.nombre}\n`;
        mensaje += `Presentación: ${producto.presentacion}\n`;
        mensaje += `Cantidad: ${producto.cantidad}\n`;
        mensaje += `Subtotal: ${formatoPrecioMini.format(producto.precio * producto.cantidad)}\n\n`;
    });

    const total = carritoMini.reduce(
        (suma, producto) =>
            suma + producto.precio * producto.cantidad,
        0
    );

    mensaje += `TOTAL: ${formatoPrecioMini.format(total)}\n\n`;
    mensaje += "Quedo pendiente de la confirmación. Gracias.";

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
});


/* 18. INICIAR MINIMARKET */

mostrarProductosMini();
actualizarCarritoMini();

console.log("Minimarket de Farmacia La Esquina cargado correctamente.");

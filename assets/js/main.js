const productos = [
    {
        id: 1,
        nombre: "Paracetamol",
        precio: 150,
        categoria: "Medicamentos",
        imagen: "paracetamol.jpg",
        descripcion: "Analgésico y antipirético para aliviar el dolor y la fiebre.",
        variantes: ["500 mg", "750 mg"],
        presentaciones: ["Caja"],
        disponibilidad: "Consultar disponibilidad",
        destacado: true
    },
    {
        id: 2,
        nombre: "Ibuprofeno",
        precio: 180,
        categoria: "Medicamentos",
        imagen: "ibuprofen.jpg",
        descripcion: "Medicamento antiinflamatorio para aliviar el dolor y la inflamación.",
        variantes: ["200 mg", "400 mg", "600 mg"],
        presentaciones: ["Caja"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 3,
        nombre: "Vitamina C",
        precio: 250,
        categoria: "Vitaminas",
        imagen: "vitamina-c.500.jpg",
        descripcion: "Suplemento de vitamina C para complementar la alimentación.",
        variantes: ["500 mg"],
        presentaciones: ["Frasco"],
        disponibilidad: "Consultar disponibilidad",
        destacado: true
    },
    {
        id: 4,
        nombre: "Multivitaminas",
        precio: 350,
        categoria: "Vitaminas",
        imagen: "meskesson.jpg",
        descripcion: "Complemento multivitamínico para apoyar una alimentación equilibrada.",
        variantes: [],
        presentaciones: ["Frasco"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 5,
        nombre: "Alcohol antiséptico",
        precio: 100,
        categoria: "Higiene",
        imagen: "alcoholantiseptico.jpg",
        descripcion: "Solución antiséptica para uso externo.",
        variantes: [],
        presentaciones: ["120 ml", "250 ml", "500 ml"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 6,
        nombre: "Gel antibacterial",
        precio: 125,
        categoria: "Higiene",
        imagen: "gel-antibacterial.jpg",
        descripcion: "Gel para la higiene de las manos.",
        variantes: [],
        presentaciones: ["60 ml", "250 ml", "500 ml"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    }
    
    ,
    {
        id: 7,
        nombre: "Loratadina",
        precio: 120,
        categoria: "Medicamentos",
        imagen: "loratadina.jpg",
        descripcion: "Antihistamínico utilizado para aliviar síntomas de alergia.",
        variantes: ["10 mg"],
        presentaciones: ["Caja"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 8,
        nombre: "Cetirizina",
        precio: 140,
        categoria: "Medicamentos",
        imagen: "cetirizina.jpg",
        descripcion: "Antihistamínico utilizado para aliviar síntomas de alergia.",
        variantes: ["10 mg"],
        presentaciones: ["Caja"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 9,
        nombre: "Omeprazol",
        precio: 180,
        categoria: "Medicamentos",
        imagen: "omeprazol.jpg",
        descripcion: "Medicamento utilizado para reducir la producción de ácido estomacal.",
        variantes: ["20 mg", "40 mg"],
        presentaciones: ["Caja"],
        disponibilidad: "Consultar disponibilidad",
        destacado: true
    },
    {
        id: 10,
        nombre: "Sales de rehidratación oral",
        precio: 45,
        categoria: "Higiene",
        imagen: "sales-rehidratacion.jpg",
        descripcion: "Sales para preparar una solución de rehidratación oral.",
        variantes: [],
        presentaciones: ["Sobre"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 11,
        nombre: "Agua oxigenada",
        precio: 75,
        categoria: "Higiene",
        imagen: "agua-oxigenada.jpg",
        descripcion: "Solución de peróxido de hidrógeno para uso externo.",
        variantes: [],
        presentaciones: ["120 ml"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 12,
        nombre: "Gasas estériles",
        precio: 90,
        categoria: "Higiene",
        imagen: "gasas.jpg",
        descripcion: "Gasas estériles para curaciones y primeros auxilios.",
        variantes: [],
        presentaciones: ["Paquete"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 13,
        nombre: "Vendas",
        precio: 65,
        categoria: "Higiene",
        imagen: "vendas.jpg",
        descripcion: "Venda para soporte y protección de zonas del cuerpo.",
        variantes: [],
        presentaciones: ["Unidad"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 14,
        nombre: "Algodón",
        precio: 95,
        categoria: "Higiene",
        imagen: "algodon.jpg",
        descripcion: "Algodón para uso externo y cuidado personal.",
        variantes: [],
        presentaciones: ["Paquete"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    },
    {
        id: 15,
        nombre: "Mascarillas",
        precio: 120,
        categoria: "Higiene",
        imagen: "mascarillas.jpg",
        descripcion: "Mascarillas para protección e higiene respiratoria.",
        variantes: [],
        presentaciones: ["Paquete de 10"],
        disponibilidad: "Consultar disponibilidad",
        destacado: false
    }

];


/* 2. RECUPERAR INFORMACIÓN */

function recuperarDatos(clave, valorInicial) {
    try {
        const datos = JSON.parse(localStorage.getItem(clave));
        return datos ?? valorInicial;
    } catch (error) {
        return valorInicial;
    }
}


/* 3. CARRITO Y FAVORITOS */

let carritoGuardado = recuperarDatos("farmaciaCarrito", []);

let carrito = Array.isArray(carritoGuardado)
    ? carritoGuardado.filter(item =>
        productos.some(producto => producto.id === item.id) &&
        Number.isInteger(item.cantidad) &&
        item.cantidad > 0
    ).map(item => {
        const original = productos.find(p => p.id === item.id);

        return {
            ...original,
            variante: item.variante || "",
            presentacion: item.presentacion || "",
            cantidad: item.cantidad,
            precio: original.precio
        };
    })
    : [];

let favoritosGuardados = recuperarDatos("farmaciaFavoritos", []);

let favoritos = Array.isArray(favoritosGuardados)
    ? favoritosGuardados.filter(id =>
        productos.some(producto => producto.id === id)
    )
    : [];

let categoriaActual = "Todos";
let soloFavoritos = false;


/* 4. CONECTAR CON EL HTML */

const contenedor = document.getElementById("lista-productos");
const buscador = document.getElementById("buscador");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const productosCarrito = document.getElementById("productos-carrito");
const botonVaciar = document.getElementById("vaciar");
const botonesFiltros = document.querySelectorAll(".filtro");
const botonFavoritos = document.getElementById("mostrar-favoritos");
const cantidadResultados = document.getElementById("cantidad-resultados");


/* 5. FORMATO DE PRECIOS */

const formatoPrecio = new Intl.NumberFormat("es-DO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function mostrarPrecio(cantidad) {
    return "RD$ " + formatoPrecio.format(cantidad);
}


/* 6. RUTA DE IMÁGENES */

const rutaImagen = window.location.pathname.includes("/pages/")
    ? "../img/"
    : "img/";


/* 7. GUARDAR INFORMACIÓN */

function guardarCarrito() {
    try {
        localStorage.setItem("farmaciaCarrito", JSON.stringify(carrito));
    } catch (error) {
        console.error("No se pudo guardar el carrito:", error);
    }
}

function guardarFavoritos() {
    try {
        localStorage.setItem("farmaciaFavoritos", JSON.stringify(favoritos));
    } catch (error) {
        console.error("No se pudieron guardar los favoritos:", error);
    }
}


/* 8. NOTIFICACIONES */

function mostrarNotificacion(mensaje) {
    let notificacion = document.getElementById("notificacion");

    if (!notificacion) {
        notificacion = document.createElement("div");
        notificacion.id = "notificacion";
        notificacion.classList.add("notificacion");
        document.body.appendChild(notificacion);
    }

    notificacion.textContent = mensaje;
    notificacion.classList.add("mostrar");

    clearTimeout(notificacion.timer);

    notificacion.timer = setTimeout(() => {
        notificacion.classList.remove("mostrar");
    }, 2500);
}


/* 9. MOSTRAR PRODUCTOS */

function mostrarProductos(lista) {
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (cantidadResultados) {
        cantidadResultados.textContent =
            `${lista.length} producto(s) encontrado(s)`;
    }

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <p class="sin-productos">
                No encontramos productos.
            </p>
        `;
        return;
    }

    lista.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        const esFavorito = favoritos.includes(producto.id);

        const opcionesVariantes = producto.variantes.length
            ? producto.variantes.map(v =>
                `<option value="${v}">${v}</option>`
            ).join("")
            : "";

        const opcionesPresentaciones = producto.presentaciones.map(p =>
            `<option value="${p}">${p}</option>`
        ).join("");

        tarjeta.innerHTML = `
            ${producto.destacado ? `
                <span class="etiqueta-destacado">
                    ⭐ Destacado
                </span>
            ` : ""}


            <img
                class="imagen-producto"
                src="${rutaImagen}${producto.imagen}"
                alt="${producto.nombre}"
                onerror="this.alt='Imagen no encontrada: ' + this.src">

            <h3>${producto.nombre}</h3>

            <p class="categoria-producto">
                ${producto.categoria}
            </p>

            <p class="descripcion-producto">
                ${producto.descripcion}
            </p>

            <p class="disponibilidad-producto">
                <span>●</span> ${producto.disponibilidad}
            </p>

            <strong class="precio">
                ${mostrarPrecio(producto.precio)}
            </strong>

            ${producto.variantes.length ? `
                <label>Concentración:</label>
                <select class="selector-variante" data-producto="${producto.id}">
                    ${opcionesVariantes}
                </select>
            ` : ""}

            <label>Presentación:</label>
            <select class="selector-presentacion" data-producto="${producto.id}">
                ${opcionesPresentaciones}
            </select>

            <button
                type="button"
                onclick="agregarCarrito(${producto.id}, this)">
                🛒 Agregar al carrito
            </button>
        `;

        contenedor.appendChild(tarjeta);
    });
}



/* 10. BUSCADOR Y FILTROS */

function aplicarFiltros() {
    const texto = buscador
        ? buscador.value.toLowerCase().trim()
        : "";

    const filtrados = productos.filter(producto => {
        const coincideTexto =
            producto.nombre.toLowerCase().includes(texto) ||
            producto.categoria.toLowerCase().includes(texto);

        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const coincideFavoritos =
            !soloFavoritos || favoritos.includes(producto.id);

        return coincideTexto && coincideCategoria && coincideFavoritos;
    });

    mostrarProductos(filtrados);
}


/* 11. FILTROS DE CATEGORÍA */

botonesFiltros.forEach(boton => {
    boton.addEventListener("click", function() {
        categoriaActual = this.dataset.categoria;

        botonesFiltros.forEach(elemento => {
            elemento.classList.remove("activo");
        });

        this.classList.add("activo");
        aplicarFiltros();
    });
});


/* 12. BUSCADOR */

if (buscador) {
    buscador.addEventListener("input", aplicarFiltros);
}


/* 13. FAVORITOS */

function cambiarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favorito => favorito !== id);
        mostrarNotificacion("Producto eliminado de favoritos");
    } else {
        favoritos.push(id);
        mostrarNotificacion("❤️ Producto agregado a favoritos");
    }

    guardarFavoritos();
    aplicarFiltros();
}

if (contenedor) {
    contenedor.addEventListener("click", function(event) {
        const boton = event.target.closest("[data-favorito]");

        if (!boton) return;

        cambiarFavorito(Number(boton.dataset.favorito));
    });
}


/* 14. VER FAVORITOS */

if (botonFavoritos) {
    botonFavoritos.addEventListener("click", function() {
        soloFavoritos = !soloFavoritos;

        this.textContent = soloFavoritos
            ? "Ver todos los productos"
            : "Ver favoritos";

        this.classList.toggle("activo", soloFavoritos);
        aplicarFiltros();
    });
}


/* 15. AGREGAR AL CARRITO CON VARIANTES */

function agregarCarrito(id, boton) {
    const original = productos.find(p => p.id === id);

    if (!original) return;

    const tarjeta = boton.closest(".producto");

    const selectorVariante = tarjeta.querySelector(".selector-variante");
    const selectorPresentacion = tarjeta.querySelector(".selector-presentacion");

    const variante = selectorVariante
        ? selectorVariante.value
        : "";

    const presentacion = selectorPresentacion
        ? selectorPresentacion.value
        : "";

    const existente = carrito.find(item =>
        item.id === id &&
        item.variante === variante &&
        item.presentacion === presentacion
    );

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            ...original,
            variante,
            presentacion,
            cantidad: 1
        });
    }

    actualizarCarrito();

    mostrarNotificacion(
        `${original.nombre} ${variante} ${presentacion} agregado al carrito`
    );
}


/* 16. ACTUALIZAR CARRITO */

function actualizarCarrito() {
    guardarCarrito();

    let cantidadTotal = 0;
    let precioTotal = 0;

    if (productosCarrito) {
        productosCarrito.innerHTML = "";

        if (carrito.length === 0) {
            productosCarrito.innerHTML = `
                <p class="carrito-vacio">
                    🛒 Tu carrito está vacío.
                </p>
            `;
        }

        carrito.forEach(producto => {
            cantidadTotal += producto.cantidad;

            const subtotal = producto.precio * producto.cantidad;
            precioTotal += subtotal;

            const elemento = document.createElement("div");
            elemento.classList.add("producto-carrito");

            elemento.innerHTML = `
                <div class="info-carrito">
                    <h4>${producto.nombre}</h4>

                    <p>
                        ${producto.variante ? producto.variante + " · " : ""}
                        ${producto.presentacion}
                    </p>

                    <p>${mostrarPrecio(producto.precio)}</p>
                </div>

                <div class="controles-cantidad">
                    <button type="button"
                        data-accion="disminuir"
                        data-id="${producto.id}"
                        data-variante="${producto.variante}"
                        data-presentacion="${producto.presentacion}">
                        −
                    </button>

                    <span>${producto.cantidad}</span>

                    <button type="button"
                        data-accion="aumentar"
                        data-id="${producto.id}"
                        data-variante="${producto.variante}"
                        data-presentacion="${producto.presentacion}">
                        +
                    </button>
                </div>

                <strong>${mostrarPrecio(subtotal)}</strong>

                <button type="button"
                    class="eliminar-producto"
                    data-accion="eliminar"
                    data-id="${producto.id}"
                    data-variante="${producto.variante}"
                    data-presentacion="${producto.presentacion}">
                    🗑️
                </button>
            `;

            productosCarrito.appendChild(elemento);
        });
    }

    if (contador) contador.textContent = cantidadTotal;
    if (total) total.textContent = mostrarPrecio(precioTotal);
}


/* 17. IDENTIFICAR VARIANTES DEL CARRITO */

function buscarProductoCarrito(boton) {
    const id = Number(boton.dataset.id);
    const variante = boton.dataset.variante || "";
    const presentacion = boton.dataset.presentacion || "";

    return carrito.find(item =>
        item.id === id &&
        item.variante === variante &&
        item.presentacion === presentacion
    );
}


/* 18. CAMBIAR CANTIDAD */

function cambiarCantidad(producto, operacion) {
    if (!producto) return;

    if (operacion === "aumentar") {
        producto.cantidad++;
    }

    if (operacion === "disminuir") {
        producto.cantidad--;

        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item !== producto);
        }
    }

    actualizarCarrito();
}


/* 19. ELIMINAR PRODUCTO */

function eliminarProducto(producto) {
    if (!producto) return;

    carrito = carrito.filter(item => item !== producto);

    actualizarCarrito();
    mostrarNotificacion("Producto eliminado del carrito");
}


/* 20. CONTROLES DEL CARRITO */

if (productosCarrito) {
    productosCarrito.addEventListener("click", function(event) {
        const boton = event.target.closest("button[data-accion]");

        if (!boton) return;

        const producto = buscarProductoCarrito(boton);
        const accion = boton.dataset.accion;

        if (accion === "aumentar") {
            cambiarCantidad(producto, "aumentar");
        }

        if (accion === "disminuir") {
            cambiarCantidad(producto, "disminuir");
        }

        if (accion === "eliminar") {
            eliminarProducto(producto);
        }
    });
}


/* 21. VACIAR CARRITO */

if (botonVaciar) {
    botonVaciar.addEventListener("click", function() {
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion("Carrito vaciado correctamente");
    });
}

/* ==================================================
   23. ENVIAR PEDIDO POR WHATSAPP
================================================== */

const botonWhatsApp = document.getElementById("enviar-whatsapp");

if (botonWhatsApp) {

    botonWhatsApp.addEventListener("click", function () {

        if (carrito.length === 0) {
            mostrarNotificacion("Primero agrega productos al carrito.");
            return;
        }

        const numeroWhatsApp = "18095551234";

        let mensaje = "¡Hola! Bienvenido a Farmacia La Esquina.\n\n";
        mensaje += "Quiero realizar el siguiente pedido:\n\n";

        carrito.forEach(producto => {

            mensaje += `• ${producto.nombre}\n`;
            mensaje += `  Concentración: ${producto.variante || "No aplica"}\n`;
            mensaje += `  Presentación: ${producto.presentacion || "No especificada"}\n`;
            mensaje += `  Cantidad: ${producto.cantidad}\n`;
            mensaje += `  Subtotal: ${mostrarPrecio(producto.precio * producto.cantidad)}\n\n`;

        });

        const cantidadTotal = carrito.reduce(
            (suma, producto) => suma + producto.cantidad, 0
        );

        const precioTotal = carrito.reduce(
            (suma, producto) =>
                suma + producto.precio * producto.cantidad, 0
        );

        mensaje += "--------------------------\n";
        mensaje += `Cantidad de unidades: ${cantidadTotal}\n`;
        mensaje += `TOTAL: ${mostrarPrecio(precioTotal)}\n\n`;
        mensaje += "Quedo pendiente de la confirmación. ¡Gracias!";

        const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlace, "_blank");

    });

}


/* 22. INICIAR PÁGINA */

aplicarFiltros();
actualizarCarrito();

console.log(
    "Farmacia La Esquina: catálogo y carrito con variantes funcionando."
);


/* ==================================================
   FARMACIA LA ESQUINA
   GALERÍA DE MEDICAMENTOS SUJETOS A RECETA
================================================== */

(() => {

    const galeriaReceta = document.getElementById("galeria-receta");

    if (!galeriaReceta) return;

    const medicamentosReceta = [
        {
            nombre: "Dulotex",
            imagen: "dulotex.jpg"
        },
        {
            nombre: "Escitalopram",
            imagen: "escitalopram.jpg"
        },
        {
            nombre: "Farmapran",
            imagen: "farmapran.jpg"
        },
        {
            nombre: "Lasea",
            imagen: "lasea.jpg"
        },
        {
            nombre: "Lozam",
            imagen: "lozam.jpg"
        },
        {
            nombre: "Nervikan",
            imagen: "nervikan.jpg"
        },
        {
            nombre: "Proxetina",
            imagen: "proxetina.jpg"
        },
        {
            nombre: "Seroquel",
            imagen: "seroquel.jpg"
        },
        {
            nombre: "Sertralina",
            imagen: "sertralina.jpg"
        },
        {
            nombre: "Tofranil",
            imagen: "tofranil.jpg"
        }
    ];

    // Imagen de presentación de la sección

    const encabezado = document.querySelector(
        "#medicamentos-receta .encabezado-receta"
    );

    if (encabezado) {
        const imagenPresentacion = document.createElement("img");

        imagenPresentacion.src = `${rutaImagen}disponibilidad.jpg`;
        imagenPresentacion.alt = "Consulta de disponibilidad de medicamentos";
        imagenPresentacion.className = "imagen-disponibilidad";

        encabezado.appendChild(imagenPresentacion);
    }

    // Crear las tarjetas

    galeriaReceta.innerHTML = medicamentosReceta.map(producto => `
        <article class="tarjeta-receta">

            <img
                src="${rutaImagen}${producto.imagen}"
                alt="${producto.nombre}"
                loading="lazy"
                onerror="this.style.display='none'"
            >

            <div class="contenido-tarjeta-receta">

                <h3>${producto.nombre}</h3>

                <span class="estado-receta">
                    Requiere verificación
                </span>

                <p>
                    Consulta la presentación y disponibilidad
                    con nuestro personal farmacéutico.
                </p>

                <a href="contacto.html" class="boton-receta">
                    Consultar
                </a>

            </div>

        </article>
    `).join("");

})();



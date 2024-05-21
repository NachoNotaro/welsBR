/* let cart = {};

function addToCart(productName, price, stock) {
    if (stock <= 0) {
        alert("Producto fuera de stock");
        return;
    }
    
    if (!cart[productName]) {
        cart[productName] = { price: price, quantity: 0 };
    }

    cart[productName].quantity++;
    stock--;
    document.getElementById('colonias').innerText = stock;
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const selectedProductsElement = document.getElementById('selected-products');
    selectedProductsElement.innerHTML = '';

    let totalPrice = 0;
    for (const productName in cart) {
        const product = cart[productName];
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - Precio: $${product.price} - Cantidad: ${product.quantity}`;
        selectedProductsElement.appendChild(listItem);
        totalPrice += product.price * product.quantity;
    }

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

function coloniasEnVenta() {
    alert("Función 'coloniasEnVenta' no implementada");
    // Aquí podrías implementar cualquier funcionalidad adicional necesaria
}

function reset() {
    cart = {};
    updateCartDisplay();
} */

// Lista de productos con sus precios
const productos = {
    "manzanas": 2,
    "bananas": 1.5,
    "naranjas": 3,
};

// Función para calcular el total de la compra
function calcularTotal(carrito) {
    let total = 0;
    for (let producto in carrito) {
        total += carrito[producto] * productos[producto];
    }
    return total.toFixed(2);
}

// Función principal del chat
function chat() {
    let carrito = {};
    let continuar = true;

    while (continuar) {
        let producto = prompt("¿Qué producto desea comprar? (manzanas, bananas, naranjas, etc.)");
        if (producto.toLowerCase() in productos) {
            let cantidad = parseInt(prompt(`¿Cuántos ${producto} desea comprar?`));
            carrito[producto.toLowerCase()] = cantidad;
        } else {
            let agregarNuevo = prompt("Producto no encontrado. ¿Desea agregar un nuevo producto a la lista? (si/no)").toLowerCase();
            if (agregarNuevo === "si") {
                let nuevoProducto = prompt("Ingrese el nombre del nuevo producto:");
                let nuevoPrecio = parseFloat(prompt(`Ingrese el precio de ${nuevoProducto}:`));
                productos[nuevoProducto.toLowerCase()] = nuevoPrecio;
            } else {
                continuar = false;
            }
        }
    }

    // Mostrar carrito y total
    console.log("Carrito de compras:");
    for (let producto in carrito) {
        console.log(`${producto}: ${carrito[producto]}`);
    }
    console.log(`Total a pagar: $${calcularTotal(carrito)}`);
}

// Ejecutar la función principal
chat();


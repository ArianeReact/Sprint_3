let products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

let countProduct = 0;

// Exercise 2
function cleanCart() {
    //Buidem la array cart
    cart = [];
    //Cridem a la funcio printCart perque imprimeixi la array cart en aquest cas que estarà buida
    printCart();
    //Inicialitzem la variable countProduct a 0
    countProduct = 0;
    //Imprimim per pantalla la variable countProduct al div corresponent del botó cart
    document.getElementById("count_product").innerHTML = countProduct;
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep l'array cart, modificant el camp subtotalWithDiscount en cas que s'apliqui la promoció.
    //Un exemple de cada element de l'array cart és:
    //{
    //name: 'cooking oil',
    //price: 10.5,
    //type: 'grocery',
    //quantity: 5,
    //subtotal: 31.5,
    //subtotalWithDiscount: 30
    //}

    //Ajuda: com que producte del carret té quantitat, ja pots validar si té descompte:

    //recorrem l'array cart
    for (i = 0; i < cart.length; i++) {
        //calculem el subtotatl que sempre serà el preu per la quantitat de productes
        cart[i].subtotal = cart[i].price * cart[i].quantity;

        //En cas que un producte tingui descompte, s'ha de guardar el preu total amb descompte en el camp: subtotalWithDiscount.
        if ((cart[i].name == "cooking oil") && (cart[i].quantity >= cart[i].offer.number)) {
            //Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
            cart[i].subtotalWithDiscount = Number((cart[i].subtotal - 10).toFixed(2));
        } else if ((cart[i].name == "Instant cupcake mixture") && (cart[i].quantity >= cart[i].offer.number)) {
            //Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3.
            cart[i].subtotalWithDiscount = Number((cart[i].subtotal / 3 * 2).toFixed(2));
        } else {
            //Si no s'ha d'aplicar descompte, no fa falta que guardis res. 
            //Pero li dono el valor de subtotal a subtotalWithDiscount per poder-ho sumar tot i calcular el total price de la cart desde un unic parametre
            cart[i].subtotalWithDiscount = Number((cart[i].subtotal).toFixed(2));
        }
    }

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let cart_list = "";
    let total_price = 0;
    for (let i = 0; i < cart.length; i++) {
        //per cada element de cart construim un tr
        cart_list += "<tr>";
        cart_list += "<th scope='row'>" + cart[i].name + "</th>";
        cart_list += "<td>$" + cart[i].price + "</td>";
        cart_list += "<td>" + cart[i].quantity + "</td>";
        cart_list += "<td>$" + cart[i].subtotalWithDiscount + "</td>";

        //afegim els botons per afegir o eliminar productes
        cart_list += "<td><button type='button' onclick='addToCart(" + cart[i].id + ")'>+</button></td>";
        cart_list += "<td><button type='button' onclick='removeFromCart(" + cart[i].id + ")'>-</button></td>";
        cart_list += "</tr>";

        //calculem el total sumant els subtotalWithDiscount de tots els productes de l'array cart
        total_price += cart[i].subtotalWithDiscount;
    }

    //Pintem per pantalla la variable cart_list, ara amb tota l'array maquetada
    document.getElementById("cart_list").innerHTML = cart_list;
    //Pintem la variable total_price al div corresponent amb tots els subtotalWithdiscount sumats.
    document.getElementById("total_price").innerHTML = total_price.toFixed(2);

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    //Busquem el producte clicat per id dins de l'array products
    let productIndex = products.findIndex((elemento) => elemento.id === id);

    //Incrementem el contador de productes
    countProduct++;
    //imprimim el contador de productes al botó Cart
    document.getElementById("count_product").innerHTML = countProduct;

    // Validem si el producte existeix a l'array cart
    let cartProductIndex = cart.findIndex(product => product.id == products[productIndex].id);
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    //En cas que no existeixi, l'afegim a l'array cart (compte, que no se t'oblidi agregar la propietat quantity amb valor 1 al producte abans de fer push). 
    if (cartProductIndex == -1) {
        cart.push({
            ...products[productIndex],
            quantity: 1
        });
        //Si, en canvi, ja existeix aquest producte al carretó, haurem d'incrementar el camp quantity.
    } else {
        cart[cartProductIndex].quantity++;
    }

    applyPromotionsCart();
    printCart();

}

// Exercise 8
function removeFromCart(id) {

    //Has de completar la funció removeFromCart(), la qual rep l'id del producte per al qual es deu decrementar la seva quantitat en una unitat.
    let cartProductIndex = cart.findIndex(product => product.id == id);
    if (cart[cartProductIndex].quantity == 1) {
        //Tingues en compte que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del carret, no passar la seva quantitat a 0.
        cart.splice(cartProductIndex, 1);
    } else {
        cart[cartProductIndex].quantity--;
    }

    //Modifiquem el valor contador de productes(count_product) del boto Cart
    countProduct--;
    document.getElementById("count_product").innerHTML = countProduct;

    //Recordar actualitzar les promocions.
    applyPromotionsCart();
    //Tornem a imprimir la cart amb les noves modificacions
    printCart();

}

function open_modal() {
    //console.log("Open Modal");
    printCart();
}


//FUNCIONS JA NO ÚTILS


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    //Inicialitzem variable posicio a -1. Aquest és el valor que mantindrà si no troba el producte
    let posicio = -1;
    let i = 0;
    let producte = [];
    //Iterem l'array per buscar el producte que tingui el mateix atribut id del producte seleccionat
    //Mentre i sigui mes petit que la mida de l'array i posicio sigui -1
    while ((i < products.length) && (posicio == -1)) {
        if ((products[i].id == id)) {
            //Si el trobem, posicio tindrà el valor de l'index de l'array del producte trobat
            //Ja no tornara a entrar al while perque posicio ja no sera -1
            posicio = i;
            id = products[i].id;
        } else { //Mentre no el trobem incrementem la i
            i++;
        }
    }

    // 2. Add found product to the cartList array
    producte = new Object();
    producte.id = products[i].id;
    producte.name = products[i].name;
    producte.price = products[i].price;
    producte.type = products[i].type;
    producte.offer = products[i].offer;

    //I el pushem a l'array cartList
    cartList.push(producte);
    //console.log("array cartList si buy");
    //console.table(cartList);
    countProduct++;
    document.getElementById("count_product").innerHTML = countProduct;
    calculateTotal();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let cartListLength = cartList.length;
    let i;
    let totalPrice = 0;
    for (i = 0; i < cartListLength; i++) {
        totalPrice = totalPrice + cartList[i].price;
    }

    //console.log("TotalPrice = $" + totalPrice);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];

    for (let i = 0; i < cartList.length; i++) {
        let cartProduct = {
            ...cartList[i]
        };
        // Per cada element de cartList, hem de validar si existeix en el array cart:
        let cartProductIndex = cart.findIndex(product => product.id == cartProduct.id);
        //En cas que no existeixi, l'afegim a l'array cart (compte, que no se t'oblidi agregar la propietat quantity amb valor 1 al producte abans de fer push). 
        if (cartProductIndex == -1) {
            cart.push({
                ...cartProduct,
                quantity: 1
            });
            //Si, en canvi, ja existeix aquest producte al carretó, haurem d'incrementar el camp quantity.
        } else {
            cart[cartProductIndex].quantity++;
        }
    }
    //console.log("array cart generateCart");
    //console.table(cart);
    applyPromotionsCart();

}

import {cart} from "../data/cart.js"
import {products} from "../data/products.js"
//okay lets try to do it
//save the data
//generate the html
//make it interactive

//add whats inside the order summary then append everything
//order-summary
//order-summary->cart-item-container

//cart-item-container->->delivery date 
//cart-item-container->->cart-item-details-grid

//cart-item-details-grid->img class="product-image"
//div class="cart-item-details"

//<div class="delivery-options">



cart.forEach(cartItem => {
    const orderSummary = document.createElement("div");
    orderSummary.classList.add("order-summary");

    const cartItemContainer = document.createElement("div");
    cartItemContainer.classList.add("order-summary");
    orderSummary.appendChild(cartItemContainer);

    const deliveryDate = document.createElement("div");
    deliveryDate.classList.add("delivery-date");
    deliveryDate.textContent = "Delivery date: Tuesday, June 21"
    cartItemContainer.appendChild(deliveryDate);

    const cartItemDetailsGrid = document.createElement("div");
    cartItemDetailsGrid.classList.add("cart-item-details-grid");
    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = 
    cartItemContainer.appendChild(cartItemDetailsGrid);
});



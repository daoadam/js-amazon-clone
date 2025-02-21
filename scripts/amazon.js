let productsGrid = document.querySelector(".js-products-grid");

//make a foreach loop that generates the html instead of this bs on our amazon
products.forEach((product) => {

    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    // Image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product-image-container");

    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = product.image;

    imageContainer.appendChild(img);
    productContainer.appendChild(imageContainer);

    // Product name
    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productName.textContent = product.name;
    productContainer.appendChild(productName);

    // Product rating
    const productRatingContainer = document.createElement("div");
    productRatingContainer.classList.add("product-rating-container");

    const starsImg = document.createElement("img");
    starsImg.classList.add("product-rating-stars");
    starsImg.src = `images/ratings/rating-${product.rating.stars * 10}.png`;

    const productRating = document.createElement("div");
    productRating.classList.add("product-rating");
    productRating.textContent = product.rating.score;

    productRatingContainer.appendChild(starsImg);
    productRatingContainer.appendChild(productRating);
    productContainer.appendChild(productRatingContainer);

    // Product price
    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${(product.priceCents / 100).toFixed(2)}`;
    productContainer.appendChild(productPrice);

    // Quantity dropdown
    const productQuantityContainer = document.createElement("div");
    productQuantityContainer.classList.add("product-quantity-container");

    const select = document.createElement("select");
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if (i === 1) option.selected = true;
        select.appendChild(option);
    }

    productQuantityContainer.appendChild(select);
    productContainer.appendChild(productQuantityContainer);

    // Added to cart
    const addedToCart = document.createElement("div");
    addedToCart.classList.add("added-to-cart");

    const checkmarkImg = document.createElement("img");
    checkmarkImg.src = "images/icons/checkmark.png";

    addedToCart.appendChild(checkmarkImg);
    addedToCart.appendChild(document.createTextNode(" Added"));
    productContainer.appendChild(addedToCart);

    // Add to Cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-button", "button-primary");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.dataset.productID = product.id;
    productContainer.appendChild(addToCartButton);

    // Append final product container to the grid
    productsGrid.appendChild(productContainer);
});


//instead of using names lets use ID because two items can have the same name

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener(("click"), ()=>{
        const productID = button.dataset.productID;

        let matchingItem;

        cart.forEach((item)=> {
            if(productID === item.productID){
                matchingItem = item;
            }
        });

        if(matchingItem){
            matchingItem.quantity++;
        } else {
            cart.push({
                productID: productID,
                quantity: 1
            })
        }
        console.log(cart)
    });
});


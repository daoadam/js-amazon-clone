console.log("nihao")

//how to save the information?
//create a variable that stores a list of objects
//each object has a name, price, rating and image
//it is stored in an array that can add(push) and remove(pop)

const products = [{
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
        stars: 4.5,
        score: 87,
    }, //this has 2 parts, the stars and the number so we can make it into another object
    priceCents: 1090
}, {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating:{
        stars: 4,
        score: 127
    },
    priceCents: 2095,
}, {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating:{
        stars: 4.5,
        score: 56
    },
    priceCents: 799,
}]

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
    productContainer.appendChild(addToCartButton);

    // Append final product container to the grid
    productsGrid.appendChild(productContainer);
});

console.log(productsGrid)





export const cart = [{
    //use the same format as the object we made downb elow
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];

//deduplication to normalize data to just work with

export function addToCart(productId, productIdQuantity){
    let matchingItem;
        cart.forEach((cartItem) =>{
            if(cartItem.productId === productId){
                matchingItem = cartItem;
            } //makes matching item a truthy value if there exists a matching item
        })

        if (!matchingItem) { // If the item does NOT exist in the cart, create it
            cart.push({
                productId: productId,
                quantity: productIdQuantity // First time adding this item, so set initial quantity
            });
        } else { // If item exists, update its quantity
            matchingItem.quantity += productIdQuantity;
}
}
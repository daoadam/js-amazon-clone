export const cart = [{

}];

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
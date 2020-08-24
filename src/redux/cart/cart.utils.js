/* utility functions allow us to keep our code clean and organize
functions that maybe need in multiplesfiles in one location */

/* export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    ); 

    if(existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
          ? {...cartItem, quantity: cartItem.quantity + 1 }  
          : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd , quantity: 1}]
};     */     /* this quantity property gets attached the first time around
         since this if block won't run when its a new item */

         export const addItemToCart = (cartItems, cartItemToAdd) => {
            const existingCartItem = cartItems.find(
              cartItem => cartItem.id === cartItemToAdd.id
            );
          
            if (existingCartItem) {
              return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              );
            }
          
            return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
          };

     export const removeItemFromCart = (cartItems , cartItemToRemove) => {
        const existingCartItem = cartItems.find(
          cartItem => cartItem.id === cartItemToRemove.id
        );
        if(existingCartItem.quantity === 1) {
          return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
          )
        }

        return cartItems.map(
          cartItem => cartItem.id === cartItemToRemove.id ?
           {...cartItem , quantity: cartItem.quantity - 1}
           :
           cartItem
        );
          };
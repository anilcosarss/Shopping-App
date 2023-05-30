import React, { useEffect, useState, createContext } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount,setItemAmount] = useState(0);

  // total price 

  const [total,setTotal] = useState(0);

  useEffect(() => {
    var totalPrice = cart.map( (urun) => {
      return urun.price * urun.amount;
    }).reduce((acc,curr) => {
      return acc + curr;
    },0)
    setTotal(parseFloat(totalPrice).toFixed(2))
  },[cart])


  // uptade item amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator,currentItem) =>{
        return accumulator + currentItem.amount;
      }, 0);
       setItemAmount(amount)
    }
  },[cart])

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // Check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart)
  }
  // clear cart
  const clearCart = () => { setCart([]) }

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  //decrease amount 
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }




  return <CartContext.Provider value={{
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total
  }} >
    {children}
  </CartContext.Provider>;
};



export default CartProvider;

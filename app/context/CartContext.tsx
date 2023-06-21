"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<any[]>([]);
  const [itemsAmount, setItemsAmount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // increase item quantity

  const increaseItemQuantity = (itemId: string) => {
    setCart((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  // decrease item quantity

  const decreaseItemQuantity = (itemId: string) => {
    setCart((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        console.log("item");
        return item;
      })
    );
  };

  // Set item quantity
  const setItemQuantity = (itemId: any, newQuantity: any) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.price * c.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // add to cart
  const addToCart = (item: Array<{}>, id: string) => {
    const itemID = parseInt(id);
    console.log(item);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);

    // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    // open the cart sidebar
    setIsOpen(true);

    console.log("item added");
  };

  // remove from cart
  const removeFromCart = (id: string) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // handle input
  const handleInput = (e: { target: { value: string } }, id: string) => {
    const value = parseInt(e.target.value);
    // find the item in the cart by id
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // handle select
  const handleSelect = (e: { target: { value: string } }, id: string) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        setItemQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

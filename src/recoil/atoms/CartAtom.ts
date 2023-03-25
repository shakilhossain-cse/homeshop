import { atom } from "recoil";
import { ICartData, IProduct } from "../../type";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../utils/localStorage";

const cartAtom = atom<ICartData[]>({
  key: "cartAtom",
  default: getFromLocalStorage("cart") ?? [],
});

export const addToCart = (
  cart: ICartData[],
  product: IProduct,
  qty: number
) => {
  const newCart = [...cart];
  newCart.push({ id: product.id, product, quantity: qty });
  addToLocalStorage("cart", newCart);
  return newCart;
};

export const removeFromCart = (cart: ICartData[], productId: number) => {
  const filterProduct = cart.filter((product) => product.id !== productId);
  addToLocalStorage("cart", filterProduct);
  return filterProduct;
};

export const incrementQuantity = (cart: ICartData[], productId: number) => {
  const itemIndex = cart.findIndex((cartItem) => cartItem.id === productId);
  const updatedCart = [...cart];

  if (itemIndex !== -1) {
    const productQty = cart[itemIndex].product.quantity;
    const cartQty = updatedCart[itemIndex].quantity;

    if (productQty > cartQty) {
      const item = updatedCart[itemIndex];
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      updatedCart[itemIndex] = updatedItem;
    }
  }

  return updatedCart;
};
export const decrementQuantity = (cart: ICartData[], productId: number) => {
  const itemIndex = cart.findIndex((cartItem) => cartItem.id === productId);
  const updatedCart = [...cart];

  if (itemIndex !== -1) {
    const productQty = cart[itemIndex].product.quantity;
    const cartQty = updatedCart[itemIndex].quantity;
    const newQty = cartQty + -1;

    if (newQty > 0 && newQty <= productQty) {
      const item = updatedCart[itemIndex];
      const updatedItem = { ...item, quantity: newQty };
      updatedCart[itemIndex] = updatedItem;
    } else {
      updatedCart.splice(itemIndex, 1); // Remove the item from the array
    }
  }

  return updatedCart;
};

export default cartAtom;

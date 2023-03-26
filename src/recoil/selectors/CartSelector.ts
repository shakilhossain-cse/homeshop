import { selector } from "recoil";
import cartAtom from "../atoms/CartAtom";
import { SHIPPING_RATE, TAX_RATE } from "../constance";




export const cartSubtotalSelector = selector({
  key: "cartSubtotalSelector",
  get: ({ get }) => {
    const cart = get(cartAtom);
    return cart.reduce((total, item) => {
      if (item.product.discount_price) {
        return total + item.product.discount_price * item.quantity;
      }
      return total + item.product.price * item.quantity;
    }, 0);
  },
});



export const cartTaxSelector = selector({
  key: 'cartTaxSelector',
  get: ({ get }) => {
    const subtotal = get(cartSubtotalSelector);
    const tax = subtotal * TAX_RATE;
    return tax;
  },
});

export const cartShippingSelector = selector({
  key: 'cartShippingSelector',
  get: ({ get }) => {
    const subtotal = get(cartSubtotalSelector);
    const shipping = subtotal * SHIPPING_RATE;
    return shipping;
  },
});

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const subtotal = get(cartSubtotalSelector);
    const tax = get(cartTaxSelector);
    const shipping = get(cartShippingSelector);
    const total = subtotal + tax + shipping;
    return total;
  },
});
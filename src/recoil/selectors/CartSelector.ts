import { selector } from "recoil";
import cartAtom from "../atoms/CartAtom";
import cartState from "../atoms/CartAtom";

const cartSelector = selector({
  key: "cartSelector",
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

export default cartSelector;

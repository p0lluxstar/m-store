import { ICartItem } from "@/types";

export const addToCart = (item: ICartItem): void => {
  const cart: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existing = cart.find((p) => p.variant_id === item.variant_id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

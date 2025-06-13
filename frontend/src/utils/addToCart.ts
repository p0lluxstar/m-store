export interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export const addToCart = (item: ICartItem): void => {
  const cart: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existing = cart.find((p) => p.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

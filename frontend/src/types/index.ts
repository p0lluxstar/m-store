export interface IProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  variants?: Array<{
    id: string;
    calculated_price: {
      calculated_amount: number;
    };
  }>;
}

export interface ICategory {
  id: string;
  name: string;
  handle: string;
}

export interface ICartItem {
  id: string;
  variant_id: string;
  title: string;
  quantity: number;
  price: number;
}

export type TCartItemEssentials = Pick<ICartItem, 'variant_id' | 'quantity'>;

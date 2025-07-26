export interface ICartItem {
  variant_id: string;
  quantity: number;
}

export interface IOrderData {
  items: ICartItem[];
  customer_name: string;
  customer_phone: string;
  region_id: string;
}

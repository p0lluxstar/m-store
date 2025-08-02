export interface IProduct {
  id: string;
  title: string;
  description: string;
  mid_code: string;
  handle: string;
  collection: {
    title: string;
    handle: string;
  };
  images: Array<{
    id: string;
    url: string;
  }>;
  tags: Array<{
    value: string;
  }>;
  variants: Array<{
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
  description: string;
}

export interface ICartItem {
  id: string;
  variant_id: string;
  title: string;
  handle: string;
  imagesUrl: string;
  quantity: number;
  price: number;
  collectionHandle: string;
  collectionTitle: string;
}

export type TCartItemEssentials = Pick<ICartItem, 'variant_id' | 'quantity'>;

export interface IUserFormCart {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum EViewMode {
  Table = 'table',
  List = 'list',
}

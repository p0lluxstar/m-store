export interface IProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  variants?: Array<{
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

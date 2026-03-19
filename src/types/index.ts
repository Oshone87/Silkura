export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors?: string[];
  description?: string;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

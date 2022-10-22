export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: Category;
}

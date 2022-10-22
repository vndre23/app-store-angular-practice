export interface Category {
  id: string;
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
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

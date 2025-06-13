
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  thumbnail: string;
  
}

export interface CartProduct extends Product {
  quantity: number; 
}

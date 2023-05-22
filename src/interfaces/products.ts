export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: TSize[];
  slug: string;
  tags: string[];
  title: string;
  type: TType;
  gender: "men" | "women" | "kid" | "unisex";
}

export type TSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type TType = "shirts" | "pants" | "hoodies" | "hats";

import { db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";

interface ProductSlug {
  slug: string;
}

export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();
  return slugs;
};

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  try {
    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    if (!product) {
      return null;
    }

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const getProductsByTerm = async (
  term: string
): Promise<IProduct[] | null> => {
  term = term.toString().toLowerCase();
  try {
    await db.connect();
    const products = await Product.find({ $text: { $search: term } })
      .select("title images prices inStock slug -_id")
      .lean();
    await db.disconnect();

    if (!products) {
      return null;
    }
    return products;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const getAllProducts = async (): Promise<IProduct[] | null> => {
  try {
    await db.connect();
    const products = await Product.find().lean();
    await db.disconnect();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

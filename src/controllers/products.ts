import type { NextApiRequest, NextApiResponse } from "next";
import { db, SHOP_CONSTANTS } from "@/database";
import { Product } from "@/models";
import { TProductsData } from "@/interfaces";

async function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  const { gender = "all" } = req.query;

  let condition = {};
  if (gender !== "all" && SHOP_CONSTANTS.validGender.includes(`${gender}`)) {
    condition = { gender };
  }
  try {
    await db.connect();

    const products = await Product.find(condition)
      .select("title images price inStock slug -_id")
      .lean();
    await db.disconnect();
    return res.status(200).json(products);
  } catch (error) {
    await db.disconnect();
    res
      .status(500)
      .json({ message: "An error occurred while fetching the products." });
  }
}

async function getProductsBySlug(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  const { slug } = req.query;
  try {
    await db.connect();

    const product = await Product.findOne({ slug }).lean();

    await db.disconnect();

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    await db.disconnect();
    res
      .status(500)
      .json({ message: "An error occurred while fetching the product." });
  }
}

async function searchProducts(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res.status(404).json({ message: "you must send a search params" });
  }

  q = q.toString().toLocaleLowerCase();

  try {
    await db.connect();
    const products = await Product.find({ $text: { $search: q } }).lean();
    await db.disconnect();

    res.status(200).json(products);
  } catch (error) {
    await db.disconnect();
    await db.disconnect();
    res
      .status(500)
      .json({ message: "An error occurred while fetching the product." });
  }
}

export { getProducts, getProductsBySlug, searchProducts };

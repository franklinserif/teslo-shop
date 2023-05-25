import type { NextApiRequest, NextApiResponse } from "next";
import { searchProducts } from "@/controllers";
import { TProductsData } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      break;
  }

  res.status(200).json({ message: "Example" });
}

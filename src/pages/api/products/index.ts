import { TProductsData } from "@/interfaces";
import { getProducts } from "@/controllers";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      return res.status(400).json({ message: "bad request" });
  }
}

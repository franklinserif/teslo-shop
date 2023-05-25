import type { NextApiRequest, NextApiResponse } from "next";
import { getProductsBySlug } from "@/controllers";
import { TProductsData } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TProductsData>
) {
  switch (req.method) {
    case "GET":
      return getProductsBySlug(req, res);

    default:
      return res.status(400).json({ message: "bad request" });
  }
}

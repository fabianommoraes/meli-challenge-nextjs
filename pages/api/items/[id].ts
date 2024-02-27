import { NextApiRequest, NextApiResponse } from "next";
import { getStaticProductDetails } from "@/services/items";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "GET") {
    const { id } = request.query;

    try {
      const data = await getStaticProductDetails(id);
      return response.status(200).json(data);
    } catch (error) {
      return response.status(500).json({ error: "Server Error" });
    }
  }
};

export default handler;

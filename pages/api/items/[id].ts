// @ts-nocheck

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "GET") {
    const { id } = request.query;

    try {
      const { data: itemResponseData } = await axios.get(
        `https://api.mercadolibre.com/items/${id}`
      );

      const categoryId = itemResponseData.category_id;

      const { data: descriptionResponseData } = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
      );

      let categories;

      const { data: categoriesResponse } = await axios.get(
        `https://api.mercadolibre.com/categories/${categoryId}`
      );

      categories = categoriesResponse.path_from_root.map(
        (x: Category) => x.name
      );

      const [amount, decimals] = itemResponseData.price.toString().split(".");

      const formattedDecimals = Boolean(decimals)
        ? parseInt(decimals) < 10
          ? `0${decimals}`
          : decimals
        : "00";

      const itemDetailResponse = {
        author: {
          name: "Fabiano",
          lastname: "Moraes"
        },
        item: {
          id: itemResponseData.id,
          title: itemResponseData.title,
          price: {
            currency: itemResponseData.currency_id,
            amount: parseInt(amount),
            decimals: formattedDecimals
          },
          picture: itemResponseData.pictures[0].url,
          condition: itemResponseData.condition,
          free_shipping: itemResponseData.shipping.free_shipping,
          sold_quantity: itemResponseData.initial_quantity,
          description: descriptionResponseData.plain_text
        },
        categories: categories
      };

      return response.status(200).json(itemDetailResponse);
    } catch (error) {
      return response.status(error.response.status).json(error.response.data);
    }
  }
};

export default handler;

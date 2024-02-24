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

      try {
        const { data: descriptionResponseData } = await axios.get(
          `https://api.mercadolibre.com/items/${id}/description`
        );

        const [amount, decimals] = itemResponseData.price.toString().split(".");

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
              decimais: parseInt(decimals)
            },
            picture: itemResponseData.pictures[0].url,
            condition: itemResponseData.condition,
            free_shipping: itemResponseData.shipping.free_shipping,
            sold_quantity: itemResponseData.initial_quantity,
            description: descriptionResponseData.plain_text
          }
        };

        return response.status(200).json(itemDetailResponse);
      } catch (error) {
        // eslint-disable-next-line
        return response.status(error.response.status).json(error.response.data);
      }
    } catch (error) {
      return response.status(error.response.status).json(error.response.data);
    }
  }
};

export default handler;

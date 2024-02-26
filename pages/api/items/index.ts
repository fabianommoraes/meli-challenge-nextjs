import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type Filter = {
  id: string;
};

type Value = {
  path_from_root: [];
};

type Category = {
  name: string;
};

type MLItem = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: string;
  };
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "GET") {
    const {
      query: { q, c }
    } = request;

    try {
      const searchResponse = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
      );

      const { results, filters } = searchResponse.data;
      const category = filters.find((x: Filter) => x.id === "category");

      let categories;

      if (category) {
        const values = category.values.find((x: Value) => x.path_from_root);
        categories = values.path_from_root.map((x: Category) => x.name);
      } else {
        if (c !== "false") {
          try {
            const categoriesResponse = await axios.get(
              `https://api.mercadolibre.com/categories/${results[0].category_id}`
            );
            categories = categoriesResponse.data.path_from_root.map(
              (x: Category) => x.name
            );
          } catch (error) {
            return response.status(500).json({ error: "Server Error" });
          }
        }
      }

      const slicedResults = results.slice(0, 4);

      const items = slicedResults.map((item: MLItem) => {
        const [amount, decimals] = item.price.toString().split(".");

        const formattedDecimals = Boolean(decimals)
          ? parseInt(decimals) < 10
            ? `0${decimals}`
            : decimals
          : "00";

        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: parseInt(amount),
            decimals: formattedDecimals
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping
        };
      });

      const itemsResponse = {
        author: {
          name: "Fabiano",
          lastname: "Moraes"
        },
        categories: categories,
        items: items
      };

      return response.status(200).json(itemsResponse);
    } catch (error) {
      return response.status(500).json({ error: "Server Error" });
    }
  }
};

export default handler;

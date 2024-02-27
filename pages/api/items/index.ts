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
      query: { q, extraInfo }
    } = request;

    try {
      const searchResponse = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
      );
      const searchResponseData = await searchResponse.json();

      const { results, filters } = searchResponseData;
      const category = filters.find((x: Filter) => x.id === "category");

      let categories;

      if (category) {
        const values = category.values.find((x: Value) => x.path_from_root);
        categories = values.path_from_root.map((x: Category) => x.name);
      } else {
        if (extraInfo === "true") {
          const categoriesResponse = await fetch(
            `https://api.mercadolibre.com/categories/${results[0].category_id}`
          );
          const categoriesResponseData = await categoriesResponse.json();

          categories = categoriesResponseData.path_from_root.map(
            (x: Category) => x.name
          );
        }
      }

      const slicedResults = results.slice(0, 4);

      const items = slicedResults.map((item: MLItem) => {
        const [amount, decimals] = item.price.toString().split(".");

        const formattedDecimals = Boolean(decimals) ? decimals : "00";

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

      if (extraInfo === "true") {
        for (const item of items) {
          const itemResponse = await fetch(
            `https://api.mercadolibre.com/items/${item.id}`
          );
          const itemResponseData = await itemResponse.json();

          item.state = itemResponseData.seller_address.state.name;
        }
      }

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

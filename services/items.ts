// @ts-nocheck

import axios from "axios";

export const getProductDetails = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`);
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};

export const getSearchResults = async (
  query: string | string[] | undefined,
  extraInfo: string | string[] | undefined
) => {
  const response = await fetch(
    `http://localhost:3000/api/items?q=${query}&extraInfo=${extraInfo}`
  );
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};

export const getStaticProductDetails = async (id: string) => {
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

    categories = categoriesResponse.path_from_root.map((x: Category) => x.name);

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

    return itemDetailResponse;
  } catch (error) {
    return { error: "Server error" };
  }
};

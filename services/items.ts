type Category = {
  name: string;
};

type GetStaticProductDetailsResponse = {
  item?: {};
  error?: string;
};

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
  console.log(query);

  const response = await fetch(
    `http://localhost:3000/api/items?q=${query}&extraInfo=${extraInfo}`
  );
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};

export const getStaticProductDetails = async (
  id: string | string[] | undefined
): Promise<GetStaticProductDetailsResponse> => {
  try {
    const itemResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    const itemResponseData = await itemResponse.json();

    const descriptionResponse = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const descriptionResponseData = await descriptionResponse.json();

    const categoryId = itemResponseData.category_id;

    const categoriesResponse = await fetch(
      `https://api.mercadolibre.com/categories/${categoryId}`
    );
    const categoriesResponseData = await categoriesResponse.json();

    const categories = categoriesResponseData.path_from_root.map(
      (x: Category) => x.name
    );

    const [amount, decimals] = itemResponseData.price.toString().split(".");

    const formattedDecimals = Boolean(decimals) ? decimals : "00";

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
    return { error: "Server Error" };
  }
};

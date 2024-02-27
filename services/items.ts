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

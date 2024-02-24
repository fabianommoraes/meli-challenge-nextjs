// const env = process.env.NODE_ENV;
// export const hostname = `${env === "development" ? "http://localhost:3000" : ""}/api`;
// export const battleUrl = "/battle";
// export const monstersUrl = "/monsters";

// const headers = { "Content-type": "application/json; charset=UTF-8" };

// export const getProductDetails = async (id: string) => {
//   try {
//     const { data } = await axios.get(`http://localhost:3000/api/items/${id}`);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

export const getProductDetails = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`);
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};

export const getSearchResults = async (
  query: string | string[] | undefined
) => {
  const response = await fetch(`http://localhost:3000/api/items?q=${query}`);
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};

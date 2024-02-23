import axios from "axios";

// const env = process.env.NODE_ENV;
// export const hostname = `${env === "development" ? "http://localhost:3000" : ""}/api`;
// export const battleUrl = "/battle";
// export const monstersUrl = "/monsters";

// const headers = { "Content-type": "application/json; charset=UTF-8" };

export const getProductDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/items/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

// export const requestMonstersData = async () => {
//   const response = await fetch(`${hostname}${monstersUrl}`);
//   const data = await response.json();
//   return {
//     status: response.status,
//     data
//   };
// };

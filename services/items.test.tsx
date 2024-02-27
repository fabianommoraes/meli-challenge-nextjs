import fetchMock from "jest-fetch-mock";
import {
  getExampleClientSide,
  getProductDetails,
  getSearchResults,
  getStaticProductDetails
} from "./items";
import itemDetail from "../shared/mock/itemDetail.json";
import searchResultItems from "../shared/mock/searchResultItems.json";
import itemMlApi from "../shared/mock/itemMlApi.json";
import itemDescriptionApi from "../shared/mock/itemDescriptionApi.json";
import itemCategoryApi from "../shared/mock/itemCategoryApi.json";
import exampleShippingApi from "../shared/mock/exampleShippingApi.json";

describe("Items services tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return getProductDetails correct response", async () => {
    fetchMock.mockResponse(JSON.stringify(itemDetail), {
      status: 200
    });

    const response = await getProductDetails("MLA1362438311");
    expect(response.data.item.id).toBe("MLA1362438311");
  });

  it("should return getSearchResults correct response", async () => {
    fetchMock.mockResponse(JSON.stringify(searchResultItems), {
      status: 200
    });

    const response = await getSearchResults("playstation");
    expect(response.data[0].id).toBe("MLA1437406762");
  });

  it("should return getStaticProductDetails correct response", async () => {
    fetchMock
      .once(JSON.stringify(itemMlApi))
      .once(JSON.stringify(itemDescriptionApi))
      .once(JSON.stringify(itemCategoryApi));

    const response = await getStaticProductDetails("MLA1362438311");
    expect(response.item!.id).toBe("MLA1362438311");
  });

  it("should return getStaticProductDetails error", async () => {
    fetchMock.mockResponse(JSON.stringify({}), {
      status: 500
    });

    const response = await getStaticProductDetails("MLA1362438311");
    expect(response.error).toBe("Server Error");
  });

  it("should return getExampleClientSide correct response", async () => {
    fetchMock.mockResponse(JSON.stringify(exampleShippingApi), {
      status: 200
    });

    const response = await getExampleClientSide();
    expect(response).toBe(14);
  });

  it("should fix getStaticProductDetails decimals", async () => {
    itemMlApi.price = 1099999.99;

    fetchMock
      .once(JSON.stringify(itemMlApi))
      .once(JSON.stringify(itemDescriptionApi))
      .once(JSON.stringify(itemCategoryApi));

    const response = await getStaticProductDetails("MLA1362438311");
    expect(response.item!.id).toBe("MLA1362438311");
  });
});

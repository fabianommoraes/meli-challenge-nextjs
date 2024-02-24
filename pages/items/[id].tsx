import { GetStaticProps } from "next";
import Head from "next/head";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { getProductDetails } from "@/services/items";
import {
  ProductDetailsProps,
  Params
} from "@/components/ProductDetails/ProductDetails.types";

const ProductDetailsPage = ({ productDetails }: ProductDetailsProps) => {
  return (
    <>
      <Head>
        <title>{productDetails.item.title}</title>
        <meta name="description" content={productDetails.item.description} />
      </Head>
      <ProductDetails productDetails={productDetails} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;

  const response = await getProductDetails(params.id);

  if (response.status === 200) {
    return {
      props: {
        productDetails: response.data
      },
      revalidate: 60
    };
  } else {
    return {
      notFound: true
    };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "MLA1437406762" }
      },
      {
        params: { id: "MLA1349435350" }
      },
      {
        params: { id: "MLA1192717387" }
      },
      {
        params: { id: "MLA1663751738" }
      }
    ],
    fallback: "blocking"
  };
};

export default ProductDetailsPage;

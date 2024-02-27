import { GetStaticProps } from "next";
import Head from "next/head";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { getProductDetails } from "@/services/items";
import { ProductDetailsProps } from "@/components/ProductDetails/ProductDetails.types";
import { Params } from "@/shared/types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const ProductDetailsPage = ({ productDetails }: ProductDetailsProps) => {
  return (
    <>
      <Head>
        <title>{productDetails.item.title}</title>
        <meta name="description" content={productDetails.item.description} />
      </Head>
      <Breadcrumb categories={productDetails.categories} />
      <ProductDetails productDetails={productDetails} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;

  const response = await getProductDetails(params.id);

  if (response && response.status === 200) {
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
  // if (process.env.APP_ENV === "cy") {
  //   return {
  //     paths: [],
  //     fallback: "blocking"
  //   };
  // } else {
  return {
    paths: [
      {
        params: { id: "MLA1362438311" }
      },
      {
        params: { id: "MLA1437406762" }
      },
      {
        params: { id: "MLA903665569" }
      },
      {
        params: { id: "MLA1130295049" }
      }
    ],
    fallback: "blocking"
  };
  // }
};

export default ProductDetailsPage;

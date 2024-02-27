import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import {
  // getProductDetails,
  getStaticProductDetails
} from "@/services/items";
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

  const result = await getStaticProductDetails(params.id);

  if (result.item) {
    return {
      props: {
        productDetails: result
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
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const params = context.params as Params;

//   const response = await getProductDetails(params.id);

//   if (response.status === 200) {
//     return {
//       props: {
//         productDetails: response.data
//       }
//     };
//   } else {
//     return {
//       notFound: true
//     };
//   }
// };

export default ProductDetailsPage;

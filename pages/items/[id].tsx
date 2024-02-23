import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;
  const productDetails = await getProductDetails(params.id);

  return {
    props: {
      productDetails: productDetails
    }
  };
};

// export function getStaticPaths() {
//   const postFilenames = getPostFiles();

//   const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug } })),
//     fallback: false
//   };
// }

export default ProductDetailsPage;

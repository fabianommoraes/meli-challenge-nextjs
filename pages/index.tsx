import Head from "next/head";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

const array = [1, 2, 3];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta
          name="description"
          content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

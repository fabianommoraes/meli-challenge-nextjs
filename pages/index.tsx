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
        <title>Battle of Monsters</title>
        <meta name="description" content="Battle of Monsters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Breadcrumb />

      {/* <ProductDetails /> */}

      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 10fr 1fr",
          // gap: "tokens.$space-large",
          backgroundColor: "#EEEEEE"
        }}
      >
        <div
          style={{
            gridColumn: 2,
            backgroundColor: "white",
            borderRadius: "2px"
          }}
        >
          {array.map((i) => (
            <>
              <ProductCard key={i} />
              {i !== array.length ? (
                <hr
                  style={{
                    margin: "0 8px",
                    border: "1px solid #EEEEEE"
                  }}
                />
              ) : null}
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}

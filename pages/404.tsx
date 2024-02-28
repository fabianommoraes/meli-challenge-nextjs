import Error404 from "@/components/404/404";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
        {/* <meta name="description" content="" /> */}
      </Head>
      <Error404 />
    </>
  );
};

export default Custom404;

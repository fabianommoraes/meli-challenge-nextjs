import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import SearchResults from "@/components/SearchResults/SearchResults";
import { getSearchResults } from "@/services/items";
import { SearchResultsPageProps } from "@/components/SearchResults/SearchResults.types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const SearchResultsPage = ({ searchResults }: SearchResultsPageProps) => {
  return (
    <>
      <Head>
        <title>Busca</title>
        <meta name="description" content="Descrição" />
      </Head>
      <Breadcrumb categories={searchResults.categories} />
      <SearchResults items={searchResults.items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const search = context.query.search;

  const response = await getSearchResults(search);

  if (response.status === 200) {
    return {
      props: {
        searchResults: response.data
      }
    };
  } else {
    return {
      notFound: true
    };
  }
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: { id: "MLA1437406762" }
//       },
//       {
//         params: { id: "MLA1349435350" }
//       },
//       {
//         params: { id: "MLA1192717387" }
//       },
//       {
//         params: { id: "MLA1663751738" }
//       }
//     ],
//     fallback: "blocking"
//   };
// };

export default SearchResultsPage;

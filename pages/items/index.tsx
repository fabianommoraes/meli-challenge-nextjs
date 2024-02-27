import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import SearchResults from "@/components/SearchResults/SearchResults";
import { getSearchResults } from "@/services/items";
import { SearchResultsPageProps } from "@/shared/types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const SearchResultsPage = ({ searchResults }: SearchResultsPageProps) => {
  return (
    <>
      <Head>
        <title>Busca</title>
        <meta name="description" content="Descrição" />
      </Head>
      <Breadcrumb categories={searchResults.categories} />
      <SearchResults searchResultItems={searchResults.items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search, extraInfo } = context.query;

  const response = await getSearchResults(search, extraInfo);

  if (search && response.status === 200) {
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

export default SearchResultsPage;

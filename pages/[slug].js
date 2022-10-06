import { useRouter } from "next/router";
import styled from "styled-components";
import client from "../src/apollo/client";
import { GET_PATHS } from "../src/queries/get-paths";
import { GET_PAGE_BLOCKS } from "../src/queries/get-page-blocks";

import BlockSwitch from "../src/helper/blockSwitch";

export async function getStaticPaths() {
  const { data, loading, networkStatus } = await client.query({
    query: GET_PATHS(),
  });
  const paths = data?.pages?.edges.map((edge) => ({
    params: { slug: `${edge.node.slug}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const { data, loading, networkStatus } = await client.query({
    query: GET_PAGE_BLOCKS(slug),
  });
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}

const Page = ({ data }) => {
  const router = useRouter();
  const currentPath = router.asPath.slice(1);
  return (
    <Main>
      <h1>/{currentPath}/ Page</h1>
      {data.pageBy.blocks.map((block, i) => BlockSwitch(block, i)
      )}
    </Main>
  );
};

export default Page;

const Main = styled.main`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: beige;
`;

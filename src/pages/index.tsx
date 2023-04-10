import Head from "next/head";
import { Box } from "@mui/material";
import { graphql, loadQuery, usePreloadedQuery /* ... */ } from "react-relay";
import { environment } from "@/relay/environment";

const chargeQuery = graphql`
  query pagesChargeQuery {
    findAll {
      id
      amount
      status
    }
  }
`;
const chargeQueryReference = loadQuery(environment, chargeQuery, {});
export default function Home(props: any) {
  try {
    const data = usePreloadedQuery(chargeQuery, chargeQueryReference);
  } catch (error) {
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box></Box>
    </>
  );
}

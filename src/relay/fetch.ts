import { api } from "@/services/api/api";

async function fetchGraphQL(text: any, variables: any) {

  const response = await api.post(
    `/graphql`,
    JSON.stringify({
      query: text,
      variables,
    })
  );

  return await response.data;
}

export default fetchGraphQL;

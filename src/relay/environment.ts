import {
  Store,
  RecordSource,
  Environment,
  Network,
  // Observable,
} from "relay-runtime";
//import type { FetchFunction } from "relay-runtime";
import fetchGraphQL from "@/relay/fetch";

async function fetchRelay(params: any, variables: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

// const fetchFn: FetchFunction = (params, variables) => {
//   const response = fetch("http://localhost:3000/graphql", {
//     method: "POST",
//     headers: [["Content-Type", "application/json"]],
//     body: JSON.stringify({
//       query: params.text,
//       variables,
//     }),
//   });

//   return Observable.from(
//     response.then((data) => {
//       return data?.json() ?? [];
//     })
//   );
// };

export const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

import {
  Store,
  RecordSource,
  Environment,
  Network,
} from "relay-runtime";

import { withHydrateDatetime } from "relay-nextjs/date";
import { hydrateRelayEnvironment } from "relay-nextjs";
import fetchGraphQL from "@/relay/fetch";
export const environment = new Environment({
  network: createClientNetwork(),
  store: new Store(new RecordSource()),
});

async function fetchRelay(params: any, variables: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

export function createClientNetwork() {
  return Network.create(async (params, variables) => {
    const response = await fetch("/api/graphql", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    const json = await response.text();
    return JSON.parse(json, withHydrateDatetime);
  });
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === "undefined") return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: Network.create(fetchRelay),
      store: new Store(new RecordSource()),
      isServer: false,
    });

    hydrateRelayEnvironment(clientEnv);
  }

  return clientEnv;
}

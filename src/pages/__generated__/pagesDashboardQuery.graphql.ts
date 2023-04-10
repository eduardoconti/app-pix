/**
 * @generated SignedSource<<d9c95ef6ed936e0321b59b96f21e524a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesDashboardQuery$variables = {};
export type pagesDashboardQuery$data = {
  readonly findAll: ReadonlyArray<{
    readonly id: string;
  }>;
};
export type pagesDashboardQuery = {
  response: pagesDashboardQuery$data;
  variables: pagesDashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ChargeModel",
    "kind": "LinkedField",
    "name": "findAll",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesDashboardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesDashboardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b412e1d1e47d1b375cdcfd4bda212a88",
    "id": null,
    "metadata": {},
    "name": "pagesDashboardQuery",
    "operationKind": "query",
    "text": "query pagesDashboardQuery {\n  findAll {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "eecf34ab53caabca1c4e45a23da82db6";

export default node;

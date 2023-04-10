/**
 * @generated SignedSource<<eee1864c8518dae57fcf01c71d94cb45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesChargeQuery$variables = {};
export type pagesChargeQuery$data = {
  readonly findAll: ReadonlyArray<{
    readonly amount: number;
    readonly id: string;
    readonly status: string;
  }>;
};
export type pagesChargeQuery = {
  response: pagesChargeQuery$data;
  variables: pagesChargeQuery$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
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
    "name": "pagesChargeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesChargeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9e4c1b18bc27ff2ec57b07849f6082a2",
    "id": null,
    "metadata": {},
    "name": "pagesChargeQuery",
    "operationKind": "query",
    "text": "query pagesChargeQuery {\n  findAll {\n    id\n    amount\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "bab6c289106f22018ee9a77e4214053c";

export default node;

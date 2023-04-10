/**
 * @generated SignedSource<<b1d228cceda37ceb3d77bc4d28ce5982>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesAQuery$variables = {};
export type pagesAQuery$data = {
  readonly findAll: ReadonlyArray<{
    readonly id: string;
  }>;
};
export type pagesAQuery = {
  response: pagesAQuery$data;
  variables: pagesAQuery$variables;
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
    "name": "pagesAQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesAQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4ebf35e7f2768082912d66f3a3c2a054",
    "id": null,
    "metadata": {},
    "name": "pagesAQuery",
    "operationKind": "query",
    "text": "query pagesAQuery {\n  findAll {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7f417c3753bea8832c7daf1ee8a166d1";

export default node;

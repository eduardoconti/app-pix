/**
 * @generated SignedSource<<c35d058c859f565e57dc3121055b87fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type chargeDataGridQuery$variables = {};
export type chargeDataGridQuery$data = {
  readonly findAll: ReadonlyArray<{
    readonly amount: number;
    readonly created_at: any;
    readonly e2e_id: string | null;
    readonly id: string;
    readonly provider: string;
    readonly status: string;
  }>;
};
export type chargeDataGridQuery = {
  response: chargeDataGridQuery$data;
  variables: chargeDataGridQuery$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "e2e_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "provider",
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
    "name": "chargeDataGridQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "chargeDataGridQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8f6c35389eca915888e8990ce0e77bbd",
    "id": null,
    "metadata": {},
    "name": "chargeDataGridQuery",
    "operationKind": "query",
    "text": "query chargeDataGridQuery {\n  findAll {\n    id\n    amount\n    status\n    created_at\n    e2e_id\n    provider\n  }\n}\n"
  }
};
})();

(node as any).hash = "72f90aab590742ec801a04f79840de77";

export default node;

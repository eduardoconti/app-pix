/**
 * @generated SignedSource<<ebe099aed72959ec4cb0a4469b452787>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type webhookDataGridQuery$variables = {};
export type webhookDataGridQuery$data = {
  readonly findAllUserWeboohok: ReadonlyArray<{
    readonly attempts: number;
    readonly charge_id: string;
    readonly created_at: any;
    readonly delivered_at: any | null;
    readonly id: string;
    readonly payload: any;
    readonly type: string;
  }>;
};
export type webhookDataGridQuery = {
  response: webhookDataGridQuery$data;
  variables: webhookDataGridQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: 'UserWebhookNotificationModel',
      kind: 'LinkedField',
      name: 'findAllUserWeboohok',
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'charge_id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'type',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'payload',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'attempts',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'delivered_at',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'created_at',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'webhookDataGridQuery',
      selections: v0 /*: any*/,
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'webhookDataGridQuery',
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: '65e34d393a37b9e1f9f3694eec86ffd7',
      id: null,
      metadata: {},
      name: 'webhookDataGridQuery',
      operationKind: 'query',
      text: 'query webhookDataGridQuery {\n  findAllUserWeboohok {\n    id\n    charge_id\n    type\n    payload\n    attempts\n    delivered_at\n    created_at\n  }\n}\n',
    },
  };
})();

(node as any).hash = '3d639a28514034fa218a4f3d002763a7';

export default node;

import { graphql } from 'relay-runtime';

export const webhookQuery = graphql`
  query webhookDataGridQuery {
    findAllUserWeboohok {
      id
      charge_id
      type
      payload
      attempts
      delivered_at
      created_at
    }
  }
`;

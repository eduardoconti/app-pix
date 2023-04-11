import { graphql } from 'relay-runtime';

export const chargeQuery = graphql`
  query chargeDataGridQuery {
    findAll {
      id
      amount
      status
      created_at
      e2e_id
      provider
    }
  }
`;
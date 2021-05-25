import { gql } from '@apollo/client';

export const ADD_COLOR = gql`
  mutation ($label: String!, $hexCode: String!, $rgbCode: String!) {
    insert_colors(objects: { label: $label, hex: $hexCode, rgb: $rgbCode })
  }
  {
    returning {
      id
      label
      hex
      rgb
      createdAt
    }
  }
`;

export const DELETE_COLOR = gql`
  mutation ($id: uuid!) {
    delete_colors(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_COLOR_LABEL = gql`
  mutation($id: uuid!, $label: String!) {
    update_colors(
      where: { id: { _eq: $id } }
      _set: { label $label }
    ) {
      returning {
        id
        label
        rgb
        hex
      }
    }
  }
`;

export const GET_ALL_COLORS = gql`
subscription MySubscription {
  colors(order_by: {createdAt: asc}) {
    hex
    id
    label
    rgb
  }
}
`;

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface GetProducts {
  products: any;
  data: {
    products: Product[];
  };
}

interface Product {
  id: string;
  title: string;
  offers: Offer[];
}

interface Offer {
  id: string;
  reseller: string;
  price: string;
}

export const GET_PRODUCTS_QUERY = gql`
  query getProducts {
    products {
      id
      title
      offers {
        reseller
        price
      }
    }
  }
`;

export default () => (
  <Query<GetProducts, {}> query={GET_PRODUCTS_QUERY}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <ul>
          {data &&
            data.products.map(({ id, title, offers }: Product) => {
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <ul>
                    {offers.map(({ id, reseller, price }: Offer) => (
                      <li key={id}>
                        {reseller} - {`€ ${price}`}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </ul>
      );
    }}
  </Query>
);

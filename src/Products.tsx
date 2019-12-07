import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Data {
  products: any;
  data: {
    products: Product[];
  };
}

interface Product {
  id: any;
  title: any;
  thumbnail: any;
  offers: any;
}

export const GET_PRODUCTS_QUERY = gql`
  query getProducts {
    products {
      id
      title
      thumbnail
      offers {
        reseller
        price
      }
    }
  }
`;

export default () => (
  <Query<Data> query={GET_PRODUCTS_QUERY}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

console.log(data);


      return (
        data &&
        data.products.map(({ id, title, offers }: Product) => {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <ul>
                {offers.map((offer: any, index: any) => (
                  <li key={index}>
                    {offer.reseller} - {`€ ${offer.price}`}
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      );
    }}
  </Query>
);

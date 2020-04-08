import React from 'react';
import { useQuery } from 'react-apollo';
import { GetProductsDocument, Product, Offer } from './generated/graphql';

export default () => {
  const { loading, data } = useQuery(GetProductsDocument);

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
};

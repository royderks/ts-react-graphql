import React from 'react';
import { GetProductsComponent  } from './generated/graphql';

export default () => (
    <GetProductsComponent>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <ul>
          {data &&
            data.products.map(({ id, title, offers }) => {
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <ul>
                    {offers.map(({ id, reseller, price }) => (
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
</GetProductsComponent>
);

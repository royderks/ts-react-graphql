import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Upload` scalar type represents a file upload promise that resolves an
   * object containing `stream`, `filename`, `mimetype` and `encoding`.
   */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation';
  addOffer: Offer;
  addProductOffer: Offer;
};


export type MutationAddOfferArgs = {
  input: OfferInput;
};


export type MutationAddProductOfferArgs = {
  productId: Scalars['Int'];
  reseller: Scalars['String'];
  price: Scalars['String'];
};

export type Offer = {
   __typename?: 'Offer';
  productId: Scalars['Int'];
  id: Scalars['Int'];
  reseller: Scalars['String'];
  price: Scalars['String'];
};

export type OfferInput = {
  productId: Scalars['Int'];
  reseller: Scalars['String'];
  price: Scalars['String'];
};

export type Product = {
   __typename?: 'Product';
  id: Scalars['Int'];
  title: Scalars['String'];
  thumbnail: Scalars['String'];
  /** @deprecated Field no longer supported */
  thumbnailName: Scalars['String'];
  reviews: Review;
  offers: Array<Offer>;
};

export type Query = {
   __typename?: 'Query';
  products: Array<Product>;
  product: Product;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};

export type Review = {
   __typename?: 'Review';
  productId: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  average?: Maybe<Scalars['Float']>;
};


export type GetProductsQueryVariables = {};


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'thumbnail'>
    & { offers: Array<(
      { __typename?: 'Offer' }
      & Pick<Offer, 'id' | 'reseller' | 'price'>
    )> }
  )> }
);


export const GetProductsDocument = gql`
    query GetProducts {
  products {
    id
    title
    thumbnail
    offers {
      id
      reseller
      price
    }
  }
}
    `;
export type GetProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductsQuery, GetProductsQueryVariables>, 'query'>;

    export const GetProductsComponent = (props: GetProductsComponentProps) => (
      <ApolloReactComponents.Query<GetProductsQuery, GetProductsQueryVariables> query={GetProductsDocument} {...props} />
    );
    
export type GetProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductsQuery, GetProductsQueryVariables>
    } & TChildProps;
export function withGetProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductsQuery,
  GetProductsQueryVariables,
  GetProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductsQuery, GetProductsQueryVariables, GetProductsProps<TChildProps, TDataName>>(GetProductsDocument, {
      alias: 'getProducts',
      ...operationOptions
    });
};
export type GetProductsQueryResult = ApolloReactCommon.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
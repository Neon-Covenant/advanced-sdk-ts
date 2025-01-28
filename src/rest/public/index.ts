import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetServerTimeRequest,
  GetServerTimeResponse,
  ListPublicProductsRequest,
  ListPublicProductsResponse,
  GetPublicProductRequest,
  GetPublicProductResponse,
  GetPublicProductBookRequest,
  GetPublicProductBookResponse,
  GetPublicProductCandlesRequest,
  GetPublicProductCandlesResponse,
  GetPublicProductMarketTradesRequest,
  GetPublicProductMarketTradesResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IPublicService {
  getServerTime(
    request: GetServerTimeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetServerTimeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listProducts(
    request: ListPublicProductsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPublicProductsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProduct(
    request: GetPublicProductRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductBook(
    request: GetPublicProductBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductBookResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductCandles(
    request: GetPublicProductCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductCandlesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getProductMarketTrades(
    request: GetPublicProductMarketTradesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductMarketTradesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class PublicService implements IPublicService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getServerTime(
    request: GetServerTimeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetServerTimeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `time`,
      callOptions: options,
    });

    return response.data as GetServerTimeResponse;
  }

  async listProducts(
    request: ListPublicProductsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPublicProductsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `market/products`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListPublicProductsResponse;
  }

  async getProduct(
    request: GetPublicProductRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `market/products/${request.productId}`,
      callOptions: options,
    });

    return response.data as GetPublicProductResponse;
  }

  async getProductBook(
    request: GetPublicProductBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductBookResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `market/product_book`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetPublicProductBookResponse;
  }

  async getProductCandles(
    request: GetPublicProductCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductCandlesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `market/products/${request.productId}/candles`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetPublicProductCandlesResponse;
  }

  async getProductMarketTrades(
    request: GetPublicProductMarketTradesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPublicProductMarketTradesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `market/products/${request.productId}/ticker`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetPublicProductMarketTradesResponse;
  }
}

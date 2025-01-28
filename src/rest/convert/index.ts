import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';
import {
  CreateConvertQuoteRequest,
  CreateConvertQuoteResponse,
  CommitConvertTradeRequest,
  CommitConvertTradeResponse,
  GetConvertTradeRequest,
  GetConvertTradeResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IConvertsService {
  createConvertQuote(
    request: CreateConvertQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateConvertQuoteResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  commitConvertTrade(
    request: CommitConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CommitConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  GetConvertTrade(
    request: GetConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class ConvertsService implements IConvertsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async createConvertQuote(
    request: CreateConvertQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateConvertQuoteResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `convert/quote`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateConvertQuoteResponse;
  }

  async commitConvertTrade(
    request: CommitConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CommitConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `convert/trade/${request.tradeId}`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CommitConvertTradeResponse;
  }

  async GetConvertTrade(
    request: GetConvertTradeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetConvertTradeResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const queryParams = {
      fromAccount: request.fromAccount,
      toAccount: request.toAccount,
    };
    const response = await this.client.request({
      url: `convert/trade/${request.tradeId}`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetConvertTradeResponse;
  }
}

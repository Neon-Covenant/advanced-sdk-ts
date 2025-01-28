import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetAccountRequest,
  GetAccountResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IAccountsService {
  getAccount(
    request: GetAccountRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAccountResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listAccounts(
    request: ListAccountsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListAccountsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class AccountsService implements IAccountsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getAccount(
    request: GetAccountRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAccountResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `accounts/${request.accountUuid}`,
      callOptions: options,
    });

    return response.data as GetAccountResponse;
  }

  async listAccounts(
    request: ListAccountsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListAccountsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `accounts`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListAccountsResponse;
  }
}

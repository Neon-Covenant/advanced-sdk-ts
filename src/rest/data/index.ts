import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetAPIKeyPermissionsRequest,
  GetAPIKeyPermissionsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IDataService {
  getAPIKeyPermissions(
    request: GetAPIKeyPermissionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAPIKeyPermissionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class DataService implements IDataService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getAPIKeyPermissions(
    request: GetAPIKeyPermissionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAPIKeyPermissionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `key_permissions`,
      callOptions: options,
    });

    return response.data as GetAPIKeyPermissionsResponse;
  }
}

import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetTransactionsSummaryRequest,
  GetTransactionsSummaryResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IFeesService {
  getTransactionSummary(
    request: GetTransactionsSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetTransactionsSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class FeesService implements IFeesService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getTransactionSummary(
    request: GetTransactionsSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetTransactionsSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `transaction_summary`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetTransactionsSummaryResponse;
  }
}

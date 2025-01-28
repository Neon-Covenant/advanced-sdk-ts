import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import {
  GetPaymentMethodRequest,
  GetPaymentMethodResponse,
  ListPaymentMethodsRequest,
  ListPaymentMethodsResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IPaymentMethodsService {
  getPaymentMethod(
    request: GetPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPaymentMethodResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  listPaymentMethods(
    request?: ListPaymentMethodsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPaymentMethodsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class PaymentMethodsService implements IPaymentMethodsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async getPaymentMethod(
    request: GetPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPaymentMethodResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `payment_methods/${request.paymentMethodId}`,
      callOptions: options,
    });

    return response.data as GetPaymentMethodResponse;
  }

  async listPaymentMethods(
    request?: ListPaymentMethodsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPaymentMethodsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `payment_methods`,
      callOptions: options,
    });

    return response.data as ListPaymentMethodsResponse;
  }
}

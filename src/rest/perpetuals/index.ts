import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';
import {
  ListPerpetualsPositionsRequest,
  ListPerpetualsPositionsResponse,
  GetPerpetualsPortfolioSummaryRequest,
  GetPerpetualsPortfolioSummaryResponse,
  GetPerpetualsPortfoliosBalancesRequest,
  GetPerpetualsPortfoliosBalancesResponse,
  GetPerpetualsPositionRequest,
  GetPerpetualsPositionResponse,
  CreateAllocatePortfolioRequest,
  CreateAllocatePortfolioResponse,
  UpdateMultiAssetCollateralRequest,
  UpdateMultiAssetCollateralResponse,
} from './types';
import { CoinbaseAdvTradeClient } from '../client';
import {
  CoinbaseAdvTradeClientException,
  CoinbaseAdvTradeException,
} from '../errors';

export interface IPerpetualsService {
  listPositions(
    request: ListPerpetualsPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPerpetualsPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getPortfolioSummary(
    request: GetPerpetualsPortfolioSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPortfolioSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getPosition(
    request: GetPerpetualsPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPositionResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  getPortfolioBalance(
    request: GetPerpetualsPortfoliosBalancesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPortfoliosBalancesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  createAllocatePortfolio(
    request: CreateAllocatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateAllocatePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;

  updateMultiAssetCollateral(
    request: UpdateMultiAssetCollateralRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateMultiAssetCollateralResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  >;
}

export class PerpetualsService implements IPerpetualsService {
  private client: CoinbaseAdvTradeClient;

  constructor(client: CoinbaseAdvTradeClient) {
    this.client = client;
  }

  async listPositions(
    request: ListPerpetualsPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPerpetualsPositionsResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/positions/${request.portfolioUuid}`,
      callOptions: options,
    });

    return response.data as ListPerpetualsPositionsResponse;
  }

  async getPortfolioSummary(
    request: GetPerpetualsPortfolioSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPortfolioSummaryResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/portfolio/${request.portfolioUuid}`,
      callOptions: options,
    });

    return response.data as GetPerpetualsPortfolioSummaryResponse;
  }

  async getPosition(
    request: GetPerpetualsPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPositionResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/positions/${request.portfolioUuid}/${request.symbol}`,
      callOptions: options,
    });

    return response.data as GetPerpetualsPositionResponse;
  }

  async getPortfolioBalance(
    request: GetPerpetualsPortfoliosBalancesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPerpetualsPortfoliosBalancesResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/balances/${request.portfolioUuid}`,
      callOptions: options,
    });

    return response.data as GetPerpetualsPortfoliosBalancesResponse;
  }

  async createAllocatePortfolio(
    request: CreateAllocatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateAllocatePortfolioResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/allocate`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateAllocatePortfolioResponse;
  }

  async updateMultiAssetCollateral(
    request: UpdateMultiAssetCollateralRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateMultiAssetCollateralResponse
    | CoinbaseAdvTradeClientException
    | CoinbaseAdvTradeException
  > {
    const response = await this.client.request({
      url: `intx/balances/${request.portfolioUuid}`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as UpdateMultiAssetCollateralResponse;
  }
}

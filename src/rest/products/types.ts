import { GetBestBidAskResponse as GetBestResp } from '../../model/GetBestBidAskResponse';
import { GetProductBookResponse as GetPBResp } from '../../model/GetProductBookResponse';
import { GetProductResponse as GetProdResp } from '../../model/GetProductResponse';
import { Candles } from '../../model/Candles';
import { ProductType } from '../../model/enums/ProductType';
import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { ExpiringContractStatus } from '../../model/enums/ExpiringContractStatus';
import { Product } from '../../model/Product';
import { GetMarketTradesResponse } from '../../model/GetMarketTradesResponse';

export type GetBestBidAskRequest = {
  productIds?: string[];
};

export type GetBestBidAskResponse = GetBestResp;

export type GetProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: string;
};

export type GetProductBookResponse = GetPBResp;

export type GetProductRequest = {
  productId: string;
  getTradabilityStatus?: boolean;
};

export type GetProductResponse = GetProdResp;

export type GetProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

export type GetProductCandlesResponse = Candles;

export type ListProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getTradabilityStatus?: boolean;
  getAllProducts?: boolean;
};

export type ListProductsResponse = { products: Product[] };

export type GetProductMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetProductMarketTradesResponse = GetMarketTradesResponse;

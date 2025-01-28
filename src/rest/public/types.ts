import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { ExpiringContractStatus } from '../../model/enums/ExpiringContractStatus';
import { ProductType } from '../../model/enums/ProductType';
import { ExtendedTimestamp } from '../../model/ExtendedTimestamp';
import { Products } from '../../model/Products';
import { Product } from '../../model/Product';
import { Candles } from '../../model/Candles';
import { GetProductBookResponse as GetPBResp } from '../../model/GetProductBookResponse';
import { GetMarketTradesResponse } from '../../model/GetMarketTradesResponse';

export type GetServerTimeRequest = Record<string, never>;

export type GetServerTimeResponse = ExtendedTimestamp;

export type ListPublicProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getAllProducts?: boolean;
};

export type ListPublicProductsResponse = Products;

export type GetPublicProductRequest = {
  productId: string;
};

export type GetPublicProductResponse = Product;

export type GetPublicProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

export type GetPublicProductCandlesResponse = Candles;

export type GetPublicProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: string;
};

export type GetPublicProductBookResponse = GetPBResp;

export type GetPublicProductMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetPublicProductMarketTradesResponse = GetMarketTradesResponse;

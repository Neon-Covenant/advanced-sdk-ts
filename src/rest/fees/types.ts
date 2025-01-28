import { ContractExpiryType } from '../../model/enums/ContractExpiryType';
import { ProductType } from '../../model/enums/ProductType';
import { ProductVenue } from '../../model/enums/ProductVenue';
import { GetTransactionSummaryResponse } from '../../model/GetTransactionSummaryResponse';

export type GetTransactionsSummaryRequest = {
  productType: ProductType;
  contractExpiryType: ContractExpiryType;
  productVenue: ProductVenue;
};

export type GetTransactionsSummaryResponse = GetTransactionSummaryResponse;

import { GetPositionsResponse } from '../../model/GetPositionsResponse';
import { GetPortfoliosResponse } from '../../model/GetPortfoliosResponse';
import { GetPositionResponse } from '../../model/GetPositionResponse';
import { GetBalanceSummaryResponse } from '../../model/GetBalanceSummaryResponse';
import { AllocatePortfolioRequest } from '../../model/AllocatePortfolioRequest';
import { MultiAssetCollateralRequest } from '../../model/MultiAssetCollateralRequest';
import { MultiAssetCollateralResponse } from '../../model/MultiAssetCollateralResponse';

export type ListPerpetualsPositionsRequest = {
  portfolioUuid: string;
};

export type ListPerpetualsPositionsResponse = GetPositionsResponse;

export type GetPerpetualsPortfolioSummaryRequest = {
  portfolioUuid: string;
};

export type GetPerpetualsPortfolioSummaryResponse = GetPortfoliosResponse;

export type GetPerpetualsPositionRequest = {
  portfolioUuid: string;
  symbol: string;
};

export type GetPerpetualsPositionResponse = GetPositionResponse;

export type GetPerpetualsPortfoliosBalancesRequest = {
  portfolioUuid: string;
};

export type GetPerpetualsPortfoliosBalancesResponse = GetBalanceSummaryResponse;

export type CreateAllocatePortfolioRequest = AllocatePortfolioRequest;

export type CreateAllocatePortfolioResponse = Record<string, never>;

export type UpdateMultiAssetCollateralRequest = MultiAssetCollateralRequest;

export type UpdateMultiAssetCollateralResponse = MultiAssetCollateralResponse;

import { PortfolioBreakdown } from '../../model/PortfolioBreakdown';
import { Portfolio } from '../../model/Portfolio';
import { CreatePortfolioRequest as createRequestInt } from '../../model/CreatePortfolioRequest';
import { CreatePortfolioResponse as createResponseInt } from '../../model/CreatePortfolioResponse';
import { MovePortfolioFundsRequest as moveRequestInt } from '../../model/MovePortfolioFundsRequest';
import { MovePortfolioFundsResponse as moveResponseInt } from '../../model/MovePortfolioFundsResponse';

export type GetPortfolioRequest = {
  portfolioUuid: string;
};

export type GetPortfolioResponse = PortfolioBreakdown;

export type ListPortfoliosRequest = Portfolio;

export type ListPortfoliosResponse = {
  portfolios: Portfolio[];
};

export type CreatePortfolioRequest = createRequestInt;

export type CreatePortfolioResponse = createResponseInt;

export type DeletePortfolioRequest = {
  portfolioUuid: string;
};

export type DeletePortfolioResponse = Record<string, never>;

export type EditPortfolioRequest = {
  portfolioUuid: string;
  name: string;
};

export type EditPortfolioResponse = createResponseInt;

export type MovePortfolioFundsRequest = moveRequestInt;

export type MovePortfolioFundsResponse = moveResponseInt;

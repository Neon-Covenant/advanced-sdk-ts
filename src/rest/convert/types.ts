import { CreateConvertQuoteResponse as createInt } from '../../model/CreateConvertQuoteResponse';
import { CommitConvertTradeResponse as commitInt } from '../../model/CommitConvertTradeResponse';
import { GetConvertTradeResponse as getInt } from '../../model/GetConvertTradeResponse';

export type CreateConvertQuoteRequest = {
  fromAccount: string;
  toAccount: string;
  amount: string;
  tradeIncentiveMetadata?: {
    userIcentiveId?: string;
    codeVal?: string;
  };
};

export type CreateConvertQuoteResponse = createInt;

export type CommitConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type CommitConvertTradeResponse = commitInt;

export type GetConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type GetConvertTradeResponse = getInt;

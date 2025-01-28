import { GetAccountResponse as GetAccountResp } from '../../model/GetAccountResponse';
import { GetAccountsResponse } from '../../model/GetAccountsResponse';

export type GetAccountRequest = {
  accountUuid: string;
};

export type GetAccountResponse = GetAccountResp;

export type ListAccountsRequest = {
  limit?: number;
  cursor?: string;
};

export type ListAccountsResponse = GetAccountsResponse;

import {
  GetAccountResponse as GetAccountResp,
  ListAccountsRequest as ListAccountsReq,
  ListAccountsResponse as ListAccountsResp,
} from '../types/accounts-types';

export type GetAccountRequest = {
  accountUuid: string;
};

export type GetAccountResponse = GetAccountResp;

export type ListAccountsRequest = ListAccountsReq;

export type ListAccountsResponse = ListAccountsResp;

import { CancelFCMSweepResponse } from '../../model/CancelFCMSweepResponse';
import { IntradayMarginSetting } from '../../model/enums/IntradayMarginSetting';
import { MarginProfileType } from '../../model/enums/MarginProfileType';
import { GetCurrentMarginWindowResponse } from '../../model/GetCurrentMarginWindowResponse';
import { GetFCMBalanceSummaryResponse } from '../../model/GetFCMBalanceSummaryResponse';
import { GetFCMPositionResponse } from '../../model/GetFCMPositionResponse';
import { GetFCMPositionsResponse } from '../../model/GetFCMPositionsResponse';
import { GetFCMSweepsResponse } from '../../model/GetFCMSweepsResponse';
import { GetIntradayMarginSettingResponse } from '../../model/GetIntradayMarginSettingResponse';
import { ScheduleFCMSweepRequest } from '../../model/ScheduleFCMSweepRequest';
import { ScheduleFCMSweepResponse } from '../../model/ScheduleFCMSweepResponse';

export type ListFuturesPositionsRequest = Record<string, never>;

export type ListFuturesPositionsResponse = GetFCMPositionsResponse;

export type ListFuturesSweepsRequest = Record<string, never>;

export type ListFuturesSweepsResponse = GetFCMSweepsResponse;

export type GetFuturesPositionRequest = {
  productId: string;
};

export type GetFuturesPositionsResponse = GetFCMPositionResponse;

export type GetFuturesBalanceSummaryRequest = Record<string, never>;

export type GetFuturesBalanceSummaryResponse = GetFCMBalanceSummaryResponse;

export type GetFuturesIntradayMarginSettingsRequest = Record<string, never>;

export type GetFuturesIntradayMarginSettingsResponse =
  GetIntradayMarginSettingResponse;

export type GetFuturesCurrentMarginWindowRequest = {
  marginProfileType?: MarginProfileType;
};

export type GetFuturesCurrentMarginWindowResponse =
  GetCurrentMarginWindowResponse;

export type UpdateFuturesIntradayMarginSettingsRequest = {
  setting: IntradayMarginSetting;
};

export type UpdateFuturesIntradayMarginSettingsResponse = Record<string, never>;

export type ScheduleFuturesSweepRequest = ScheduleFCMSweepRequest;

export type ScheduleFuturesSweepResponse = ScheduleFCMSweepResponse;

export type CancelFuturesPendingSweepRequest = Record<string, never>;

export type CancelFuturesPendingSweepResponse = CancelFCMSweepResponse;

/**
 * Copyright 2024-present Coinbase Global, Inc.
 *
 * This file is generated by Openapi Generator https://github.com/openapitools/openapi-generator
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *  Do not edit the class manually.
 */

/**
 * This helps distinguish between regular market close and downtimes due to maintenance.
 */
export enum FcmTradingSessionClosedReason {
  Undefined = 'FCM_TRADING_SESSION_CLOSED_REASON_UNDEFINED',
  RegularMarketClose = 'FCM_TRADING_SESSION_CLOSED_REASON_REGULAR_MARKET_CLOSE',
  ExchangeMaintenance = 'FCM_TRADING_SESSION_CLOSED_REASON_EXCHANGE_MAINTENANCE',
  VendorMaintenance = 'FCM_TRADING_SESSION_CLOSED_REASON_VENDOR_MAINTENANCE',
}

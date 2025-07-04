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

import { StopPriceDirection } from './enums/StopPriceDirection';

export type StopLimitStopLimitGtd = {
  /**
   * The amount of the first Asset in the Trading Pair. For example, on the BTC-USD Order Book, BTC is the Base Asset.
   */
  baseSize?: string;
  /**
   * The specified price, or better, that the Order should be executed at. A Buy Order will execute at or lower than the limit price. A Sell Order will execute at or higher than the limit price.
   */
  limitPrice?: string;
  /**
   * The specified price that will trigger the placement of the Order.
   */
  stopPrice?: string;
  /**
   * The time at which the order will be cancelled if it is not Filled.
   */
  endTime?: string;
  /**
   * The direction of the stop limit Order. If Up, then the Order will trigger when the last trade price goes above the stop_price. If Down, then the Order will trigger when the last trade price goes below the stop_price.
   */
  stopDirection?: StopPriceDirection;
};

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

import { NewOrderErrorResponse } from './NewOrderErrorResponse';
import { NewOrderSuccessResponse } from './NewOrderSuccessResponse';
import { OrderConfiguration } from './OrderConfiguration';

export type NewOrderResponse = {
  /**
   * Whether the order was created.
   */
  success: boolean;
  successResponse?: NewOrderSuccessResponse;
  errorResponse?: NewOrderErrorResponse;
  /**
   * The configuration of the order (e.g. the order type, size, etc).
   */
  orderConfiguration?: OrderConfiguration;
};

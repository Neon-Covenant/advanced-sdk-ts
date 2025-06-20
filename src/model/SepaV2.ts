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

import { Address } from './Address';
import { SepaAccountDetail } from './SepaAccountDetail';

/**
 * SepaV2 identifies for the payment method SEPA_V2
 */
export type SepaV2 = {
  /**
   * The SEPA account details.
   */
  account?: SepaAccountDetail;
  customerFirstName?: string;
  customerLastName?: string;
  email?: string;
  phoneNumber?: string;
  /**
   * Customer\'s country in ISO-3166-1 ALPHA-2.
   */
  customerCountry?: string;
  /**
   * Deprecated. Address was required for Banking Circle
   */
  address?: Address;
  /**
   * Meant to be used for routing in PGS.
   */
  supportsOpenBanking?: boolean;
};

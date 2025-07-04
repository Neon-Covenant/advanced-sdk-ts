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
import { CardDob } from './CardDob';
import { CardScheme } from './enums/CardScheme';
import { CheckoutToken } from './CheckoutToken';
import { ExpiryDate } from './ExpiryDate';
import { FirstDataToken } from './FirstDataToken';
import { Merchant } from './Merchant';
import { VaultToken } from './VaultToken';
import { WorldpayParams } from './WorldpayParams';

export type Card = {
  /**
   * A card token locked to the Firstdata vendor.
   */
  firstDataToken?: FirstDataToken;
  expiryDate?: ExpiryDate;
  postalCode?: string;
  merchant?: Merchant;
  /**
   * A card token provided by our generic token provider. This can technically be provided by any vendor, but is currently only provided by TokenEx. This token can be used to forward card information to any API using the token vault as a middleman.
   */
  vaultToken?: VaultToken;
  /**
   * A card token locked to the Worldpay vendor.
   */
  worldpayParams?: WorldpayParams;
  previousSchemeTxId?: string;
  customerName?: string;
  address?: Address;
  phoneNumber?: string;
  userId?: string;
  customerFirstName?: string;
  customerLastName?: string;
  sixDigitBin?: string;
  lastFour?: string;
  customerDob?: CardDob;
  scheme?: CardScheme;
  eightDigitBin?: string;
  /**
   * A card token locked to the Checkout vendor.
   */
  checkoutToken?: CheckoutToken;
};

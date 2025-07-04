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

import { AccountPlatform } from './enums/AccountPlatform';
import { AccountType } from './enums/AccountType';
import { Amount } from './Amount';

export type Account = {
  /**
   * Unique identifier for account.
   */
  uuid?: string;
  /**
   * Name for the account.
   */
  name?: string;
  /**
   * Currency symbol for the account.
   */
  currency?: string;
  /**
   * Available balance in the account.
   */
  availableBalance?: Amount;
  /**
   * Whether or not this account is the user\'s primary account
   */
  _default?: boolean;
  /**
   * Whether or not this account is active and okay to use.
   */
  active?: boolean;
  /**
   * Time at which this account was created.
   */
  createdAt?: string;
  /**
   * Time at which this account was updated.
   */
  updatedAt?: string;
  /**
   * Time at which this account was deleted.
   */
  deletedAt?: string;
  /**
   * What type the account is.
   */
  type?: AccountType;
  /**
   * Whether or not this account is ready to trade.
   */
  ready?: boolean;
  /**
   * Amount that is being held for pending transfers against the available balance.
   */
  hold?: Amount;
  /**
   * The ID of the portfolio this account is associated with.
   */
  retailPortfolioId?: string;
  /**
   * Platform indicates if the account is for spot (CONSUMER), US Derivatives (CFM_CONSUMER), or International Exchange (INTX).
   */
  platform?: AccountPlatform;
};

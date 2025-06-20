/**
 * Copyright 2024-present Coinbase Global, Inc.
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
 */
import { CoinbaseClient } from '@coinbase-sample/core-ts';

import { API_BASE_PATH, USER_AGENT } from '../constants';
import { CoinbaseAdvTradeCredentials } from './credentials';
import { toCamelCase } from './shared/toCamelCase';

export class CoinbaseAdvTradeClient extends CoinbaseClient {
  constructor(credentials?: CoinbaseAdvTradeCredentials, apiBasePath?: string) {
    super(apiBasePath ?? API_BASE_PATH, credentials, USER_AGENT);

    // transform the response data to camelCase
    this.addTransformResponse((response) => {
      return {
        ...response,
        data: toCamelCase(response.data),
      };
    });
  }
}

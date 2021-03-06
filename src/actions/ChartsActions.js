/*
  Copyright 2015 Skippbox, Ltd

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import alt from 'src/alt';
import ChartsApi from 'api/ChartsApi';
import ChartsUtils from 'utils/ChartsUtils';

class ChartsActions {

  constructor() {
    this.generateActions(
      'fetchChartsStart',
      'fetchChartsSuccess',
    );
  }

  fetchCharts() {
    const url = alt.stores.SettingsStore.getChartsStores().getIn([alt.stores.SettingsStore.getSelectedChartsStoreIndex(), 'url']);
    this.fetchChartsStart(url);
    return ChartsApi.fetchCharts(url).then(charts => {
      charts = ChartsUtils.parseCharts(charts);
      this.fetchChartsSuccess(charts);
      return charts;
    });
  }

}

export default alt.createActions(ChartsActions);

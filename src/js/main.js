import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';
import _ from 'lodash';
import { tableToggle } from './responsive-table';

// Get data with JQuery
let coins = $.when(getApiData).done( function(coins) {

  // combine coin descriptions with api data
  const combinedData = _.map(coins, function(obj) {
    return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
  });
  // sort data
  const tabMarkup = `
    <button class="Tab" role="tab" aria-selected="false">1 Hour</button>
    <button class="Tab" role="tab" aria-selected="true">24 Hours</button>
    <button class="Tab" role="tab" aria-selected="false">7 Days</button>
  `
  const tableContainer = document.getElementById('tabContainer');
  tableContainer.innerHTML = tabMarkup;

  const sorted = combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));
  console.log(sorted);

  // render markup for each coin
  const coin = combinedData.find(coin => {
  const accordionMarkup = `
    ${combinedData.map(coin => `
                        <button class="Accordion Accordion--${(coin.percent_change_24h > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
                          <div class="Accordion__icon crypto-icon-32 crypto-icon-svg-white crypto-icon-svg-white-${coin.symbol.toLowerCase()}"> </div>
                          <div class="Accordion__title">
                            ${coin.name}
                          </div>
                          <div class="Accordion__data">
                            <p>$${coin.price_usd}USD</p>
                          </div>
                          <div class="Accordion__data">
                            <p>${coin.percent_change_24h}</p>
                          </div>
                        </button>
                        <div class="Rtable Rtable--3cols">
                          <div class="Rtable-cell">
                            <p>Value:</p>
                          </div>
                          <div class="Rtable-cell">
                            <p>$${coin.price_usd}USD</p>
                          </div>
                          <div class="Rtable-cell">
                            <p>${coin.price_btc}BTC</p>
                          </div>
                        </div>
                        <div class="Rtable-cell Rtable-cell--foot">
                          <p>${coin.description}</p>
                        </div>`).join('')}
  `;
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = accordionMarkup;
});
// apply toggle Functionality to each coin
tableToggle();
});

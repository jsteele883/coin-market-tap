import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';
import _ from 'lodash';
import { tableToggle } from './responsive-table';

// Get data with JQuery
let coins = $.when(getApiData).done( function(coins) {

  // combine coin descriptions with api data
  let combinedData = _.map(coins, function(obj) {
    return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
  });
  // sort data
  const tabMarkup = `
    <button id="one" class="Tab" role="tab">1 Hour</button>
    <button id="two" class="Tab" role="tab" aria-selected="true">24 Hours</button>
    <button id="three" class="Tab" role="tab">7 Days</button>
  `
  const tableContainer = document.getElementById('tabContainer');
  tableContainer.innerHTML = tabMarkup;

  // Default sorting
  let orderData = combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));

  // render markup for each coin
  let coin = combinedData.find(function renderCoins(coin) {
  let accordionMarkup = `
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
  $('.Tab').on('click', function update() {
    tableContainer.innerHTML = accordionMarkup;
    $('.Tab').removeClass('selected');
    $(this).addClass('selected');
    $(this).focus();
    if ($('#one').hasClass('selected')) {
      let orderData = combinedData.sort((a, b) => parseFloat(b.percent_change_1h) - parseFloat(a.percent_change_1h));
      renderCoins();
    } else if ($('#two').hasClass('selected')) {
      let orderData = combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));
      renderCoins();
    } else if ($('#three').hasClass('selected')) {
      let orderData = combinedData.sort((a, b) => parseFloat(b.percent_change_7d) - parseFloat(a.percent_change_7d));
      renderCoins();
    }
    tableToggle();
  });
});
// apply toggle Functionality to each coin
tableToggle();

});

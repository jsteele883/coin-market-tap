import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';
import _ from 'lodash';
import { tableToggle } from './responsive-table';
import { renderTabs } from './tabs';
import selectedTab from './tabs';
import { renderCoins } from './accordions';

renderTabs()

// Get data with JQuery
let coins = $.when(getApiData).done( function(coins) {

  // combine coin descriptions with api data
  const combinedData = _.map(coins, function(obj) {
    return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
  });

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
                          <p>${coin.description ? `${coin.description}` : 'There aint no description for this coin yet!'}</p>
                        </div>`).join('')}
  `;
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = accordionMarkup;
  // apply toggle Functionality to each coin
  tableToggle();
  });

  // tab toggling function
  (function tabClick() {
    const tab = document.getElementsByClassName("Tab");
    let current = -1;

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener('click', function() {
        if (i !== current && current !== -1) {
          tab[current].classList.remove('active');
        }
        current = this.classList.toggle('active') ? i : -1;
        let selectedTab = (this.id);
        console.log(selectedTab);
        if (selectedTab == 'one') {
          const orderDataOne = combinedData.sort((a, b) => parseFloat(b.percent_change_1h) - parseFloat(a.percent_change_1h));
          let data = orderDataOne;
          let timeScale = 'percent_change_1h';
          renderCoins(data, timeScale)
        } else if (selectedTab == 'two') {
          const orderDataTwentyFour = combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));
          let data = orderDataTwentyFour;
          renderCoins(data)
        } else if (selectedTab == 'three') {
          const orderDataSeven = combinedData.sort((a, b) => parseFloat(b.percent_change_7d) - parseFloat(a.percent_change_7d));
          let data = orderDataSeven;
          renderCoins(data)
        }
        tableToggle();
        });
      };
  })();
});

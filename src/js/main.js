import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';
import _ from 'lodash';
import { tableToggle } from './responsive-table';
import { renderTabs } from './tabs';
import selectedTab from './tabs';
import { accordionMarkup } from './accordions';
import { accordionMarkupOne } from './accordions';
import { accordionMarkupWeek } from './accordions';

renderTabs()

// Get data with JQuery
let coins = $.when(getApiData).done( function(coins) {

  // combine coin descriptions with api data
  const combinedData = _.map(coins, function(obj) {
    return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
  });

  // Default sorting
  let orderData = combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));

  // apply markup
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = `${combinedData.map(accordionMarkup).join('')}`;
  // apply toggle Functionality to each coin
  tableToggle();

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
        if (selectedTab == 'one') {
          combinedData.sort((a, b) => parseFloat(b.percent_change_1h) - parseFloat(a.percent_change_1h));
          tableContainer.innerHTML = `${combinedData.map(accordionMarkupOne).join('')}`;
        } else if (selectedTab == 'two') {
          combinedData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h));
          tableContainer.innerHTML = `${combinedData.map(accordionMarkup).join('')}`;
        } else if (selectedTab == 'three') {
          combinedData.sort((a, b) => parseFloat(b.percent_change_7d) - parseFloat(a.percent_change_7d));
          tableContainer.innerHTML = `${combinedData.map(accordionMarkupWeek).join('')}`;
        }
        tableToggle();
        });
      };
  })();
});

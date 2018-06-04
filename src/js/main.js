import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';
import _ from 'lodash';
import { tableToggle } from './responsive-table';
import { renderTabs } from './tabs';
import { renderSearch } from './search';
import selectedTab from './tabs';
import { accordionMarkup } from './accordions';
import { accordionMarkupOne } from './accordions';
import { accordionMarkupWeek } from './accordions';

renderSearch();
renderTabs();

function replaceIcons(coinSymbol) {
  $(".Accordion__icon").on('error', function(){
    const coinSymbol = $(this).attr("alt");
    $(this).unbind("error").after(`<div class='Accordion__icon Accordion__icon--default'>${coinSymbol}</div>`);
    $(this).css("display", "none");
  });
}

getApiData
  .then(coins => coins.json())
  .then(coins => {
    // combine coin descriptions with api data
    const combinedData = _.map(coins, function(obj) {
      return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
    });

    console.log(combinedData);

    // Get coins with no descriptions
    const undefinedDescriptions = combinedData.map(coin => {
      if (coin.description === undefined) {
        return coin.name
      }
    });

    // Filter out the undefined ones
    function filter_array(test_array) {
      var index = -1,
          arr_length = test_array ? test_array.length : 0,
          resIndex = -1,
          result = [];
      while (++index < arr_length) {
          var value = test_array[index];
          if (value) {
              result[++resIndex] = value;
          }
      }
      return result;
    }

    // Need to email results.
    console.log(filter_array(undefinedDescriptions));

    // apply markup
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = `${combinedData.map(accordionMarkup).join('')}`;

    // apply toggle Functionality to each coin
    tableToggle();

    replaceIcons();

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
          if (selectedTab == 'rank') {
            combinedData.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
            tableContainer.innerHTML = `${combinedData.map(accordionMarkup).join('')}`;
          } else if (selectedTab == 'one') {
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
          replaceIcons();
          });
        };
    })();
  })
  .catch((err) => {
    console.log(err);
  })

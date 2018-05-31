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
renderTabs()

const searchInput = document.getElementById('search');
searchInput.onkeyup = function(){
  var input, filter, table, tr, td, i;
  filter = searchInput.value.toUpperCase();
  table = document.getElementById('tableContainer');
  tr = table.getElementsByTagName("button");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("Accordion__title")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  console.log(filter);
};

// Get data with JQuery
$.when(getApiData).done( function(coins) {

  // combine coin descriptions with api data
  const combinedData = _.map(coins, function(obj) {
    return _.assign(obj, _.find(coinDescriptions, {name: obj.name}));
  });

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
        });
      };
  })();
});

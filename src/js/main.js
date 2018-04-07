import '../sass/style.scss';
import getApiData from './combine-data';
import { coinDescriptions } from './config';

// Get data with JQuery (should be cleaned up to use ES6)
let coins = $.when(getApiData).done( function(coins) {
  console.log(coins.name[index[1]]);

  const coin = coins.find(coin => {
  const markup = `
    ${coins.map(coin => `
                        <button class="Accordion" role="tab" aria-selected="false">
                          <div class="Accordion__icon crypto-icon-32 crypto-icon-svg-white crypto-icon-svg-white-${coin.symbol.toLowerCase()}"> </div>
                          <div class="Accordion__title">
                            ${coin.name}
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
                          <p></p>
                        </div>`).join('')}
  `;
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = markup;
});

// JQuery for toggle functionality
(function ($) {
  "use strict";
  $.fn.responsiveTable = function() {

    var toggleColumns = function($table) {
      var selectedControls = [];
      $table.find(".Accordion, .Tab").each( function() {
        selectedControls.push( $(this).attr("aria-selected") );
      });
      var cellCount = 0, colCount = 0;
      var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Tab").length, $table.find(".Accordion").length );
      $table.find(".Rtable-cell").each( function() {
        $(this).addClass("hidden");
        if( selectedControls[colCount] === "true" ) $(this).removeClass("hidden");
        cellCount++;
        if( cellCount % setNum === 0 ) colCount++;
      });
    };
    $(this).each(function(){ toggleColumns($(this)); });

    $(this).find(".Tab").click( function() {
      $(this).attr("aria-selected","true").siblings().attr("aria-selected","false");
      toggleColumns( $(this).parents(".Rtable") );
    });

    $(this).find(".Accordion").click( function() {
      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
      toggleColumns( $(this).parents(".Rtable") );
    });

  };
}(jQuery));


$(".js-RtableTabs, .js-RtableAccordions").responsiveTable();

});

// render markup for each coin
export function renderCoins(data, timeScale) {
  let coin = data.find(function(coin) {
  let accordionMarkup = `
    ${data.map(coin => `
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
}

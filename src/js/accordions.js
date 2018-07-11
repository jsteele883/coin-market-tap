export function accordionMarkup(coin) {
  return `
          <div class="coin">
            <button class="Accordion Accordion--${(coin.percent_change_24h > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
              <div class="Accordion__rank">
                ${coin.rank}
              </div>
              <img class="Accordion__icon" src="public/images/coin-icons/${coin.symbol.toLowerCase()}.png" alt="${coin.symbol}">
              <div class="Accordion__title">
                ${coin.name}
              </div>
              <div class="Accordion__data Accordion__data--hide">
                <p>$${parseFloat(coin.price_usd).toFixed(4).replace(/0+$/, "")}USD</p>
              </div>
              <div class="Accordion__data Accordion__data--show">
                <p>${coin.percent_change_24h}% ${(coin.percent_change_24h > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
              </div>
              <div class="Accordion__toggle">
                <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
              </div>
            </button>
            <div class="Rtable-cell">
              <p>${coin.description ? `${coin.description}` : 'This coin has no description yet'}</p>
            </div>
            <div class="Rtable Rtable--3cols">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Value:</h4>
              </div>
              <div class="Rtable-cell">
                <p>$${coin.price_usd}USD</p>
              </div>
              <div class="Rtable-cell">
                <p>${coin.price_btc}BTC</p>
              </div>
            </div>
            <div class="Rtable-cell">
              <ul class="tags">
                ${coin.tag1 ? `<li class="tag">#${coin.tag1}</li>` : '' }
                ${coin.tag2 ? `<li class="tag">#${coin.tag2}</li>` : '' }
                ${coin.tag3 ? `<li class="tag">#${coin.tag3}</li>` : '' }
                ${coin.tag4 ? `<li class="tag">#${coin.tag4}</li>` : '' }
                ${coin.tag5 ? `<li class="tag">#${coin.tag5}</li>` : '' }
                ${coin.tag6 ? `<li class="tag">#${coin.tag6}</li>` : '' }
                ${coin.tag7 ? `<li class="tag">#${coin.tag7}</li>` : '' }
                ${coin.tag8 ? `<li class="tag">#${coin.tag8}</li>` : '' }
                ${coin.tag9 ? `<li class="tag">#${coin.tag9}</li>` : '' }
                ${coin.tag10 ? `<li class="tag">#${coin.tag10}</li>` : '' }
              </ul>
            </div>
            <div class="Rtable Rtable--4cols Rtable-cell--foot">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Supply:</h4>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Available:</h5>
                <p>$${coin.available_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Total:</h5>
                <p>${coin.total_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Max:</h5>
                <p>${coin.max_supply}</p>
              </div>
            </div>
          </div>
        `
}

export function accordionMarkupOne(coin) {
  return `
          <div class="coin">
            <button class="Accordion Accordion--${(coin.percent_change_1h > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
              <div class="Accordion__rank">
                ${coin.rank}
              </div>
              <img class="Accordion__icon" src="public/images/coin-icons/${coin.symbol.toLowerCase()}.png" alt="${coin.symbol}">
              <div class="Accordion__title">
                ${coin.name}
              </div>
              <div class="Accordion__data Accordion__data--hide">
                <p>$${parseFloat(coin.price_usd).toFixed(4).replace(/0+$/, "")}USD</p>
              </div>
              <div class="Accordion__data Accordion__data--show">
                <p>${coin.percent_change_1h}% ${(coin.percent_change_1h > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
              </div>
              <div class="Accordion__toggle">
                <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
              </div>
            </button>
            <div class="Rtable-cell">
              <p>${coin.description ? `${coin.description}` : 'This coin has no description yet'}</p>
            </div>
            <div class="Rtable Rtable--3cols">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Value:</h4>
              </div>
              <div class="Rtable-cell">
                <p>$${coin.price_usd}USD</p>
              </div>
              <div class="Rtable-cell">
                <p>${coin.price_btc}BTC</p>
              </div>
            </div>
            <div class="Rtable-cell">
              <ul class="tags">
                ${coin.tag1 ? `<li class="tag">#${coin.tag1}</li>` : '' }
                ${coin.tag2 ? `<li class="tag">#${coin.tag2}</li>` : '' }
                ${coin.tag3 ? `<li class="tag">#${coin.tag3}</li>` : '' }
                ${coin.tag4 ? `<li class="tag">#${coin.tag4}</li>` : '' }
                ${coin.tag5 ? `<li class="tag">#${coin.tag5}</li>` : '' }
                ${coin.tag6 ? `<li class="tag">#${coin.tag6}</li>` : '' }
                ${coin.tag7 ? `<li class="tag">#${coin.tag7}</li>` : '' }
                ${coin.tag8 ? `<li class="tag">#${coin.tag8}</li>` : '' }
                ${coin.tag9 ? `<li class="tag">#${coin.tag9}</li>` : '' }
                ${coin.tag10 ? `<li class="tag">#${coin.tag10}</li>` : '' }
              </ul>
            </div>
            <div class="Rtable Rtable--4cols Rtable-cell--foot">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Supply:</h4>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Available:</h5>
                <p>$${coin.available_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Total:</h5>
                <p>${coin.total_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Max:</h5>
                <p>${coin.max_supply}</p>
              </div>
            </div>
          </div>
        `
}

export function accordionMarkupWeek(coin) {
  return `
          <div class="coin">
            <button class="Accordion Accordion--${(coin.percent_change_7d > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
              <div class="Accordion__rank">
                ${coin.rank}
              </div>
              <img class="Accordion__icon" src="public/images/coin-icons/${coin.symbol.toLowerCase()}.png" alt="${coin.symbol}">
              <div class="Accordion__title">
                ${coin.name}
              </div>
              <div class="Accordion__data Accordion__data--hide">
                <p>$${parseFloat(coin.price_usd).toFixed(4).replace(/0+$/, "")}USD</p>
              </div>
              <div class="Accordion__data Accordion__data--show">
                <p>${coin.percent_change_7d}% ${(coin.percent_change_7d > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
              </div>
              <div class="Accordion__toggle">
                <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
              </div>
            </button>
            <div class="Rtable-cell">
              <p>${coin.description ? `${coin.description}` : 'This coin has no description yet'}</p>
            </div>
            <div class="Rtable Rtable--3cols">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Value:</h4>
              </div>
              <div class="Rtable-cell">
                <p>$${coin.price_usd}USD</p>
              </div>
              <div class="Rtable-cell">
                <p>${coin.price_btc}BTC</p>
              </div>
            </div>
            <div class="Rtable-cell">
              <ul class="tags">
                ${coin.tag1 ? `<li class="tag">#${coin.tag1}</li>` : '' }
                ${coin.tag2 ? `<li class="tag">#${coin.tag2}</li>` : '' }
                ${coin.tag3 ? `<li class="tag">#${coin.tag3}</li>` : '' }
                ${coin.tag4 ? `<li class="tag">#${coin.tag4}</li>` : '' }
                ${coin.tag5 ? `<li class="tag">#${coin.tag5}</li>` : '' }
                ${coin.tag6 ? `<li class="tag">#${coin.tag6}</li>` : '' }
                ${coin.tag7 ? `<li class="tag">#${coin.tag7}</li>` : '' }
                ${coin.tag8 ? `<li class="tag">#${coin.tag8}</li>` : '' }
                ${coin.tag9 ? `<li class="tag">#${coin.tag9}</li>` : '' }
                ${coin.tag10 ? `<li class="tag">#${coin.tag10}</li>` : '' }
              </ul>
            </div>
            <div class="Rtable Rtable--4cols Rtable-cell--foot">
              <div class="Rtable-cell Rtable-cell--head">
                <h4>Supply:</h4>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Available:</h5>
                <p>$${coin.available_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Total:</h5>
                <p>${coin.total_supply}</p>
              </div>
              <div class="Rtable-cell">
                <h5 class="sub-header">Max:</h5>
                <p>${coin.max_supply}</p>
              </div>
            </div>
          </div>
        `
}

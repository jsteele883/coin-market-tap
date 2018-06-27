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
                <p>$${parseFloat(coin.price_usd).toFixed(4)}USD</p>
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
                ${coin.Tag1 ? `<li class="tag">#${coin.Tag1}</li>` : '' }
                ${coin.Tag2 ? `<li class="tag">#${coin.Tag2}</li>` : '' }
                ${coin.Tag3 ? `<li class="tag">#${coin.Tag3}</li>` : '' }
                ${coin.Tag4 ? `<li class="tag">#${coin.Tag4}</li>` : '' }
                ${coin.Tag5 ? `<li class="tag">#${coin.Tag5}</li>` : '' }
                ${coin.Tag6 ? `<li class="tag">#${coin.Tag6}</li>` : '' }
                ${coin.Tag7 ? `<li class="tag">#${coin.Tag7}</li>` : '' }
                ${coin.Tag8 ? `<li class="tag">#${coin.Tag8}</li>` : '' }
                ${coin.Tag9 ? `<li class="tag">#${coin.Tag9}</li>` : '' }
                ${coin.Tag10 ? `<li class="tag">#${coin.Tag10}</li>` : '' }
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
                <p>$${parseFloat(coin.price_usd).toFixed(4)}USD</p>
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
                ${coin.Tag1 ? `<li class="tag">#${coin.Tag1}</li>` : '' }
                ${coin.Tag2 ? `<li class="tag">#${coin.Tag2}</li>` : '' }
                ${coin.Tag3 ? `<li class="tag">#${coin.Tag3}</li>` : '' }
                ${coin.Tag4 ? `<li class="tag">#${coin.Tag4}</li>` : '' }
                ${coin.Tag5 ? `<li class="tag">#${coin.Tag5}</li>` : '' }
                ${coin.Tag6 ? `<li class="tag">#${coin.Tag6}</li>` : '' }
                ${coin.Tag7 ? `<li class="tag">#${coin.Tag7}</li>` : '' }
                ${coin.Tag8 ? `<li class="tag">#${coin.Tag8}</li>` : '' }
                ${coin.Tag9 ? `<li class="tag">#${coin.Tag9}</li>` : '' }
                ${coin.Tag10 ? `<li class="tag">#${coin.Tag10}</li>` : '' }
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
                <p>$${parseFloat(coin.price_usd).toFixed(4)}USD</p>
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
                ${coin.Tag1 ? `<li class="tag">#${coin.Tag1}</li>` : '' }
                ${coin.Tag2 ? `<li class="tag">#${coin.Tag2}</li>` : '' }
                ${coin.Tag3 ? `<li class="tag">#${coin.Tag3}</li>` : '' }
                ${coin.Tag4 ? `<li class="tag">#${coin.Tag4}</li>` : '' }
                ${coin.Tag5 ? `<li class="tag">#${coin.Tag5}</li>` : '' }
                ${coin.Tag6 ? `<li class="tag">#${coin.Tag6}</li>` : '' }
                ${coin.Tag7 ? `<li class="tag">#${coin.Tag7}</li>` : '' }
                ${coin.Tag8 ? `<li class="tag">#${coin.Tag8}</li>` : '' }
                ${coin.Tag9 ? `<li class="tag">#${coin.Tag9}</li>` : '' }
                ${coin.Tag10 ? `<li class="tag">#${coin.Tag10}</li>` : '' }
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

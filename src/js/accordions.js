export function accordionMarkup(coin) {
  return `
          <button class="Accordion Accordion--${(coin.percent_change_24h > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
            <div class="Accordion__icon crypto-icon-32 crypto-icon-svg-white crypto-icon-svg-white-${coin.symbol.toLowerCase()}"> </div>
            <div class="Accordion__title">
              ${coin.name}
            </div>
            <div class="Accordion__data Accordion__data--hide">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Accordion__data Accordion__data--show">
              <p>${coin.percent_change_24h}% ${(coin.percent_change_24h > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
            </div>
            <div class="Accordion__toggle">
              <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
            </div>
          </button>
          <div class="Rtable Rtable--3cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Value:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.price_btc}BTC</p>
            </div>
          </div>
          <div class="Rtable Rtable--4cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Supply:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.available_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.total_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.max_supply}</p>
            </div>
          </div>
          <div class="Rtable-cell Rtable-cell--foot">
            <p>${coin.description ? `${coin.description}` : 'There aint no description for this coin yet!'}</p>
          </div>
        `
}

export function accordionMarkupOne(coin) {
  return `
          <button class="Accordion Accordion--${(coin.percent_change_1h > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
            <div class="Accordion__icon crypto-icon-32 crypto-icon-svg-white crypto-icon-svg-white-${coin.symbol.toLowerCase()}"> </div>
            <div class="Accordion__title">
              ${coin.name}
            </div>
            <div class="Accordion__data Accordion__data--hide">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Accordion__data Accordion__data--show">
              <p>${coin.percent_change_1h}% ${(coin.percent_change_1h > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
            </div>
            <div class="Accordion__toggle">
              <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
            </div>
          </button>
          <div class="Rtable Rtable--3cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Value:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.price_btc}BTC</p>
            </div>
          </div>
          <div class="Rtable Rtable--4cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Supply:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.available_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.total_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.max_supply}</p>
            </div>
          </div>
          <div class="Rtable-cell Rtable-cell--foot">
            <p>${coin.description ? `${coin.description}` : 'There aint no description for this coin yet!'}</p>
          </div>
        `
}

export function accordionMarkupWeek(coin) {
  return `
          <button class="Accordion Accordion--${(coin.percent_change_7d > 0) ? 'positive' : 'negative'}" role="tab" aria-selected="false">
            <div class="Accordion__icon crypto-icon-32 crypto-icon-svg-white crypto-icon-svg-white-${coin.symbol.toLowerCase()}"> </div>
            <div class="Accordion__title">
              ${coin.name}
            </div>
            <div class="Accordion__data Accordion__data--hide">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Accordion__data Accordion__data--show">
              <p>${coin.percent_change_7d}% ${(coin.percent_change_7d > 0) ? '<svg class="icon icon-arrow-up2"><use xlink:href="#icon-arrow-up2"></use></svg>' : '<svg class="icon icon-arrow-down2"><use xlink:href="#icon-arrow-down2"></use></svg>'}</p>
            </div>
            <div class="Accordion__toggle">
              <svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
            </div>
          </button>
          <div class="Rtable Rtable--3cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Value:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.price_usd}USD</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.price_btc}BTC</p>
            </div>
          </div>
          <div class="Rtable Rtable--4cols">
            <div class="Rtable-cell Rtable-cell--head">
              <p>Supply:</p>
            </div>
            <div class="Rtable-cell">
              <p>$${coin.available_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.total_supply}</p>
            </div>
            <div class="Rtable-cell">
              <p>${coin.max_supply}</p>
            </div>
          </div>
          <div class="Rtable-cell Rtable-cell--foot">
            <p>${coin.description ? `${coin.description}` : 'There aint no description for this coin yet!'}</p>
          </div>
        `
}

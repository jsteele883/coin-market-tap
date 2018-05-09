// render tab markup
export function renderTabs() {
  const tabMarkup = `
    <button id="one" class="Tab">1 Hour</button>
    <button id="two" class="Tab">24 Hours</button>
    <button id="three" class="Tab">7 Days</button>
  `
  const tableContainer = document.getElementById('tabContainer');
  tableContainer.innerHTML = tabMarkup;
}

// adjust data on tab selection
class Time {
  constructor(time) {
    this.time = time;
  }
  printTime() {
    console.log(`${this.time}`)
  }
  createTimeClass() {
    console.log((coin.percent_change_24h > 0) ? 'positive' : 'negative')
  }
}

const oneHour = new Time('coin.percent_change_1h');
const twentyFourHours = new Time('coin.percent_change_24h');
const sevenDays = new Time('coin.percent_change_7d');

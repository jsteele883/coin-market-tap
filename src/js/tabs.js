// render tab markup
export function renderTabs() {
  const tabMarkup = `
    <div class="Tablist" role="tablist" id="tabContainer">
      <button id="rank" class="Tab active">Rank</button>
      <button id="one" class="Tab">1 Hour</button>
      <button id="two" class="Tab">24 Hours</button>
      <button id="three" class="Tab">7 Days</button>
    </div>
  `
  const tableContainer = document.getElementById('headerContainer');
  tableContainer.innerHTML = tabMarkup;
}

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

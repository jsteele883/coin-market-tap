// render tab markup
export function renderSearch() {
  const searchMarkup = `
    <input type="text" id="search" placeholder="Search for coins.." title="Type in a name">
    <svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg>
  `
  const searchContainer = document.getElementById('searchContainer');
  searchContainer.innerHTML = searchMarkup;
}

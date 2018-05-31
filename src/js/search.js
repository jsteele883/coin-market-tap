// render tab markup
export function renderSearch() {
  const searchMarkup = `
    <input type="text" id="search" placeholder="Search for names.." title="Type in a name">
  `
  const searchContainer = document.getElementById('searchContainer');
  searchContainer.innerHTML = searchMarkup;
}

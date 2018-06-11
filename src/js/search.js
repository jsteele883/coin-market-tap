// render tab markup
export function renderSearch() {
  const searchMarkup = `
    <input type="text" id="search" placeholder="Search for coins.." title="Type in a name">
    <svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg>
  `
  const searchContainer = document.getElementById('searchContainer');
  searchContainer.innerHTML = searchMarkup;

  const searchInput = document.getElementById('search');
  searchInput.onkeyup = function(){
    var input, filter, table, tr, td, tags, i;
    filter = searchInput.value.toUpperCase();
    table = document.getElementById('tableContainer');
    tr = table.getElementsByClassName("coin");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByClassName("Accordion__title")[0];
      tags = tr[i].getElementsByClassName("tags")[0]
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || tags.innerHTML.toUpperCase().indexOf(filter) > -1 ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
}

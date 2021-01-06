/*
 * Input Search Bar
 * **************** */
function myFunctionAdmin() {
    // Declare variables
    var input, filter, listManga, filterManga, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    listManga = document.getElementById("listManga");
    filterManga = listManga.getElementsByClassName('filterManga');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < filterManga.length; i++) {
        a = filterManga[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            filterManga[i].style.display = "";
        } else {
            filterManga[i].style.display = "none";
        }
    }
}
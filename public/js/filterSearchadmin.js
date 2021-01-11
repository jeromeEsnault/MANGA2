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
        a = filterManga[i].getElementById('titlevf')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            filterManga[i].style.display = "";
        } else {
            filterManga[i].style.display = "none";
        }
    }
}

function myFunctionAdminVolume() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
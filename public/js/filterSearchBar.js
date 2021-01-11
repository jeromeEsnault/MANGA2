/*
 * Input Search Bar
 * **************** */
function myFunction() {
    // Declare variables
    var input, filter, listManga, filterManga, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    listManga = document.getElementById("listManga");
    filterManga = listManga.getElementsByClassName('filterManga');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < filterManga.length; i++) {
        a = filterManga[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            filterManga[i].style.display = "";
        } else {
            filterManga[i].style.display = "none";
        }
    }
}




/*
 * Button Search Bar
 * ***************** */

setTimeout(() => {
    filterSelection("all")

}, 1000)

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = " ";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var col2 = btnContainer.getElementsByClassName("col-md-2");
var btns = col2.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
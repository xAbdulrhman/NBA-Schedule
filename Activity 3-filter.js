function filterByTeam() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".nbaSchedule");
    for (table of tables) {
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 1, word);
    }
}

function doFilter(rows, column, word) {
    /* Loop through all table rows and hide rows
       that have cells that don't match the search query.
     */
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText
        if (txtValue.toLowerCase().indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function filterByBroadcast() {

    let tables = document.querySelectorAll(".nbaSchedule");

    let v = MySelection.value;

    if (v == "all") {

        for (table of tables) {
            let rows = document.querySelectorAll("tbody tr");
            doFilter2(rows, "");
        }

    } else if (v == "LP") {

        for (table of tables) {
            let rows = document.querySelectorAll("tbody tr");
            doFilter2(rows, "NBA League");
        }
    } else if (v == "beIN") {

        for (table of tables) {
            let rows = document.querySelectorAll("tbody tr");
            doFilter2(rows, "beIN Sports");
        }
    } else {

        for (table of tables) {
            let rows = document.querySelectorAll("tbody tr");
            doFilter2(rows, "NBA TV");
        }
    }
}

function doFilter2(rows, word) {

    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[2];
        let txtValue = td.innerText
        if (txtValue.indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
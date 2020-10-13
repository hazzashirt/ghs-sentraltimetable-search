$('#searchfield').keyup(doSearch);

function doSearch() {
    $("#tblResults").empty();
    //ipcRenderer.send('resize','100,100');
    let query = document.getElementById('searchfield').value;
    if (query != '') {
        var data = $.parseJSON($.ajax({
            url: "https://web1.greystanes-h.schools.nsw.edu.au/timetables/ajax/searchStudents?query=" + query,
            dataType: "json",
            async: false
        }).responseText);
        data.results.forEach(element => {
            addResult(element);
        });
    }
}

function addResult(result) {
    var tbl = document.getElementById("tblResults");
    var row = tbl.insertRow();
    var cell = row.insertCell();
    var inner = "<a href='https://web1.greystanes-h.schools.nsw.edu.au/timetables/timetable?student=";
    inner += result.id;
    inner += "'><div style='height:100%;width:100%'>";
    inner += result.title;
    inner += "</div></a>";
    cell.innerHTML = null;
    cell.innerHTML = inner;
}

function delay(fn, ms) {
    let timer = 0
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
}
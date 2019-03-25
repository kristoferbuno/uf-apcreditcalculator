var credits = {
    "c":0,
    "m":0,
    "h":0,
    "bp":0,
    "s":0,
    "n":0,
    "d":0,
    "total": 0
};

var creditJSON;
var creditsForm;

$.getJSON(`json\\apexamcredits.json`, function(creds) {
    //turning JSON file into a JS object, then putting in the exam names into an array
    creditJSON = JSON.parse(JSON.stringify(creds));
})

$(document).ready(function() {
   console.log(window.location.search);
   console.log($.toJSON((window.location.search).substring(1)));
});

function deserializeGET(get_string){
    let get_copy = get_string;
    let next_exam = get_string.indexOf('exams');
    let get_array = new Array();

    while (next_exam != -1){
        next_exam = get_copy.indexOf('exams');
        let cut_copy = get_copy.substring();
        get_array.push(get_copy.substring)
    }
}
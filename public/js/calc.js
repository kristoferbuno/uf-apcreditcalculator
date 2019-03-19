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
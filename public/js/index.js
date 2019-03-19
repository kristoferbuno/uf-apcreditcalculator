var ap_exam_credits, ap_exams;

//pulling in from the ap_exam_credits.json file stored in /public/json
$.getJSON(`json\\apexamcredits.json`, function(creds) {
    //turning JSON file into a JS object, then putting in the exam names into an array
    ap_exam_credits = JSON.parse(JSON.stringify(creds));
    ap_exams = Object.keys(ap_exam_credits[3])

    //programatically add DOM elements with each exam and a field for each exam after JSON is loaded
    for (var exam in ap_exams)
    {
    var optel = `
                <div class="ui accordion fluid field">
                    <div class="title">
                        <i class="icon dropdown"></i>
                        ${ap_exams[exam]}
                    </div>
                <div class="fluid content field">
                    <input placeholder="Score (between 3 and 5)" name="${ap_exams[exam]}" min="3" max="5" type="number">
                </div>
                `;
        
        $("#listtop").append(optel);
    } 
    $('.ui.accordion').accordion();
})

//things to do when document becomes ready
$(document).ready(function(){
    //instantiate fomantic ui dropdown js
    $('#hi').dropdown();
})

//transitions from selection view to scores view
function submitForm()
{
    //show credits and remove the exam selection screen
    $('#selection_container').transition('fade');
    $('#credits_container').transition('fade', '1000ms');

    let formData = $('form').serializeArray();
    let scores = {};

    for (var index in formData){
        if (formData[index].value != ''){
            scores[formData[index].name] = formData[index].value;
        }
    }

    let credit_earned = {
        "c":0,
        "m":0,
        "h":0,
        "bp":0,
        "s":0,
        "n":0,
        "d":0,
        "total":0
    }

    for (var exam in scores){
        for (var category in credit_earned)
        {
            let score = scores[exam];
            credit_earned[category] += ap_exam_credits[score][exam][category];
        }
    }

    $('#composition_earned').text(credit_earned.c);
    $('#mathematics_earned').text(credit_earned.m);
    $('#humanities_earned').text(credit_earned.m);
    $('#sciences_earned').text(credit_earned.bp);
    $('#socsci_earned').text(credit_earned.s);
    $('#international_earned').text(credit_earned.n);
    $('#diveristy_earned').text(credit_earned.d);
    $('#total_earned').text(credit_earned.total);
}
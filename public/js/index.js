//things to do when document becomes ready
$(document).ready(function(){
    //instantiate fomantic ui dropdown js
    $('#hi').dropdown();
})

var ap_exam_credits, ap_exams;
//pulling in from the ap_exam_credits.json file stored in /public/json
$.getJSON(`json\\apexamcredits.json`, function(creds) {
    //turning JSON file into a JS object, then putting in the exam names into an array
    ap_exam_credits = JSON.parse(JSON.stringify(creds));
    ap_exams = Object.keys(ap_exam_credits[3])

    //programatically add DOM elements with each exam and a field for each exam after JSON is loaded
    for (let exam in ap_exams)
    {
    let optel = `
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

//function that transitions from selection view to scores view
function submitForm()
{
    $('#selection_container').transition('fade');
    $('#credits_container').transition('fade', '1000ms');

    let formData = $('form').serializeArray();
    let scores = {};

    //convert formData to object form in scores
    for (let index in formData){
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

    let credit_by_class = {
        "c": new Array,
        "m": new Array,
        "h": new Array,
        "bp": new Array,
        "s": new Array,
        "n": new Array,
        "d": new Array,
        "total": new Array
    }

    //put in credit into the credit_earned object
    for (let exam in scores){
        for (let category in credit_earned)
        {
            let score = scores[exam];
            let category_credit = ap_exam_credits[score][exam][category];
            if (category_credit > 0)
            {
                credit_earned[category] += category_credit;
                let temp_examObject = {};
                temp_examObject[exam] = credit_earned[category];
                credit_by_class[category].push(temp_examObject);
            }
        }
    }
    console.log(credit_by_class);

    $('#composition_earned').text(credit_earned.c);
    $('#mathematics_earned').text(credit_earned.m);
    $('#humanities_earned').text(credit_earned.h);
    $('#sciences_earned').text(credit_earned.bp);
    $('#socsci_earned').text(credit_earned.s);
    $('#international_earned').text(credit_earned.n);
    $('#diversity_earned').text(credit_earned.d);
    $('#total_earned').text(credit_earned.total);
}
var apexamcredits, apexams;

//pulling in from the apexamcredits.json file stored in /public/json
$.getJSON(`json\\apexamcredits.json`, function(creds) {
    console.log(`success`)

    //turning JSON file into a JS object, then putting in the exam names into an array
    apexamcredits = JSON.parse(JSON.stringify(creds));
    apexams = Object.keys(apexamcredits[3])
})

//things to do when document becomes ready
$(document).ready(function(){
    //instantiate fomantic ui dropdown js
    $('#hi').dropdown();
    
    //append each exam in apexamcredits
    for (var exam in apexams)
    {
        
    var optel = `
                <div class="ui accordion field">
                    <div class="title">
                        <i class="icon dropdown"></i>
                        ${apexams[exam]}
                    </div>
                <div class="content field">
                    <input placeholder="Score" type="number">
                </div>
                `;
        
        $("#listtop").append(optel);

//    $(apexams[exam]).innerHTML = apexams[exam];
    }   
    $('.ui.accordion').accordion();
})

//onclick function when you click one of the exam items
function examClick(e) {
    //toggles style and id
    e.style = (e.id == `selected`) ? `background-color:transparent; color: rgba(0, 0, 0, 0.4)` : `background-color:#1080b0; color:#FFFFFF`;
    e.id = e.id == `selected` ? `` : `selected`;


    if (e.id == `selected`)
    {
        if (e.children.length == 2)
        {
        var scoreBox = document.createElement("input");
        scoreBox.className = `content field active`;
        scoreBox.type = `number`;
        scoreBox.id = `${e.innerHTML} score`;
        scoreBox.display = `inline`;
        e.append(scoreBox);
        }
        else
        {
        e.children[1].class = e.children[1].class == `field` ? `disabled field` : `field`;
        }
    }
}
let arrChoices = []


function domChoice() {
    let domChoices = ""
    for (let i = 0; i < arrChoices.length; i++) {
        domChoices += `<div class="btn-group mr-5 mb-5" role="group" aria-label="...">
        <button type="button" class="btn btn-info btn-sm">${arrChoices[i]}</button>
        <button type="button" class="btn btn-sm" onclick="removeChoice('${arrChoices[i]}')">X</button>
      </div>`
    }
    document.getElementById('choiceServce').innerHTML = domChoices
}

function addChoice(obj) {
    if (!arrChoices.includes(obj.id)) {
        arrChoices.push(obj.id)
    }
    domChoice()
}

function removeChoice(obj) {
    var index = arrChoices.indexOf(obj);
    if (index !== -1) {
        arrChoices.splice(index, 1);
    }
    domChoice()
}

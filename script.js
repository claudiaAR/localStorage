window.addEventListener('load', main)

// const name = 'claudia'
// localStorage.name = name


// function addName(){
//     const input = 'Enter your name!'
//     localStorage.name = input
//  }

/**
 * The only form element on our page currently
 * @type {HTMLFormElement}
 */
let form
let input
let button


function main() {
    loadGlobalVariables()
    setUpEventListeners()
}

function loadGlobalVariables() {
    input = document.querySelectorAll('input')
}

function setUpEventListeners() {
    input.addEventListener('input', saveToLocalStorage)
    form.addEventListener('button', onSubmitForm)

    //for each item of list
    for(const item of input) {
        input.value = localStorage.getItem(input.id)
    }
}

function saveToLocalStorage() {
    localStorage.setItem(input.id, input.value)
}



/**
 * Handle the submit of our form
 * @param {Event} event 
 */
function onSubmitForm(event) {
    event.preventDefault()
   // localStorage.removeItem(input.id)
    input.value = ""
}



 
$(document).ready(function(){
    console.log('The page has loaded')

    $('h3').click(function(){
        $('form').fadeToggle(1000)
    })
})
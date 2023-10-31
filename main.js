let menu = document.querySelector('.menu'); //menu is selected
let btnContainer = menu.querySelector('.btnContainer') //btn container is selected
let addBtn = btnContainer.querySelector('.addBtn'); // btn is selected
let content = document.querySelector('.content'); // content container is selected

addBtn.addEventListener('click', function(){
    //when btn is clicked
    let inputBox = document.createElement('p'); // paragragh element is created
    inputBox.className = 'inputBox';  // paragraph classname is set to inputBox
    inputBox.setAttribute('contenteditable', 'true'); // attribute is added to paragraph  
    content.appendChild(inputBox); // inputBox paragraph is pushed into content container
} )
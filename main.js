let menu = document.querySelector('.menu'); 
let btnContainer = menu.querySelector('.btnContainer') 
let addBtn = btnContainer.querySelector('.addBtn');
let content = document.querySelector('.content'); 


addBtn.addEventListener('click', function(){
    
    let inputBoxContainer = document.createElement('div');
    inputBoxContainer.className = 'inputBoxContainer';
    content.appendChild(inputBoxContainer); 
    
    
    let inputBox = document.createElement('div')
    inputBox.setAttribute('contenteditable','true');
  
    inputBox.className = 'inputBox';
    inputBoxContainer.appendChild(inputBox);

    let bottomDiv = document.createElement('div');
    bottomDiv.className = 'bottomDiv';
    inputBoxContainer.appendChild(bottomDiv);

    
    let bottomLeft = document.createElement('div');
    bottomLeft.className = 'bottomLeft';
    bottomDiv.appendChild(bottomLeft);

    let bottomRight = document.createElement('div');
    bottomRight.className = 'bottomRight';
    bottomDiv.appendChild(bottomRight);
    bottomRight.innerText='delete';

    //delete functionality
    bottomRight.addEventListener('click', function(){
       bottomRight.parentElement.parentElement.remove();
    })

} )
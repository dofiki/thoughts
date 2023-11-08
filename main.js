let menu = document.querySelector('.menu'); 
let btnContainer = menu.querySelector('.btnContainer') 
let addBtn = btnContainer.querySelector('.addBtn');
let content = document.querySelector('.content'); 

function showNotes(){
    content.innerHTML = localStorage.getItem("notes");
}

showNotes();

addBtn.addEventListener('click', function(){
    
   let inputBoxContainer = document.createElement('div');
    inputBoxContainer.className = 'inputBoxContainer';
    content.appendChild(inputBoxContainer); 
    
    
    let inputBox = document.createElement('p')
    inputBox.setAttribute('contenteditable','true');
  
    inputBox.className = 'inputBox';
    inputBoxContainer.appendChild(inputBox);

    let bottomDiv = document.createElement('div');
    bottomDiv.className = 'bottomDiv';
    inputBoxContainer.appendChild(bottomDiv);

    
    let bottomLeft = document.createElement('div');
    bottomLeft.className = 'bottomLeft';
    bottomDiv.appendChild(bottomLeft);

    let bottomMid = document.createElement('div');
    bottomMid.className = 'bottomMid';
    bottomDiv.appendChild(bottomMid);
    bottomMid.innerText='save';

    let bottomRight = document.createElement('div');
    bottomRight.className = 'bottomRight';
    bottomDiv.appendChild(bottomRight);
    bottomRight.innerText='delete';

    //save functionality
    bottomMid.addEventListener('click', function(){
        localStorage.setItem("notes", content.innerHTML);
    })

    //delete functionality
    bottomRight.addEventListener('click', function(){

           let parentDiv = this.parentElement.parentElement; 
           parentDiv.remove();

           localStorage.setItem("notes", content.innerHTML);

    })

    });
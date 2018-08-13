//Lesson 10 
// var btns = document.querySelectorAll('#book-list.delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
        
//         const li = e.target.parentElement; 
//         li.parentNode.removeChild(li);
//     });
// });

//delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
    
});


//Lesson 11 
//To query the dom for forms: document.forms
//document.forms[0]


//add books
//We want to prevent the default behavior of the add button refreshing the page 
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type = "text"]').value;


//Lesson 12 
//Create elements 

const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content 
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});

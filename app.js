document.addEventListener('DOMContentLoaded', function(){
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


//add Classes (lesson 13)
bookName.classList.add('name');
deleteBtn.classList.add('delete');

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});


//Lesson 15
//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial"; //"block also shows it"
    }
});

//Lesson 16 
//Filter books 
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})


//Lesson 17
//Creating tabbed content 
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
}) 
})

//Lesson 17: we wrapped everything inside of the DOMContent Loaded Event, which makes the script run when evrything has fully loaded. That way, you can link your script at the top of the HTML File, in the head, instead of at the end of the body. 
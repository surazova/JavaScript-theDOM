//Lessons 7 JS and the DOM

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement.parentElement);

// console.log(bookList.children);



//Lesson 8 

// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next element sibling is:', bookList.nextElementSibling);

// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';
// //(We grabbed the previous Sibling, then used the querySelector to change the HTML)

//Lesson 9 
//Creating more event listeners 
//First, query the DOM to grab what you need an event listener for 

//Changing the function of the delete button 
var btns = document.querySelectorAll('#book-list.delete');

Array.from(btns).forEach(function(btn){
   btn.addEventListener('click', function(e){
       
       
       const li = e.target.parentElement;
       li.parentNode.removeChild(li)
   }); 
});


const listItems = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});
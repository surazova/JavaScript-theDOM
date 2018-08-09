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
    
})
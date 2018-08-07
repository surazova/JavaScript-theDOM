const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles))); //Creates an array from the titles HTML collection 

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });


Array.from(titles).forEach(function(item){
    console.log(item);
})
//The above doesn't work because you're using a funciton on html, which doesn't work. 
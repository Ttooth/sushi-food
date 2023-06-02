let subtract = document.querySelectorAll("reduce");
let addition = document.querySelectorAll("increase");
let input = document.querySelector("input");
let erase = document.querySelector("h4");


for (let i=0; i < input.length; i++){
    // subtract[i].addEventListener("click", function(){
    //     console.log("working");
    //  });
     input.value[i] = 0;
}

input.addEventListener("click", function(){
    console.log("working");
 });
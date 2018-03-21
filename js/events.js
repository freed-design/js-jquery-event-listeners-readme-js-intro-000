//define functions here
function getIt() {
  $('p').on("click", function()
    alert("Hey!");
    console.log();("getIt ran!")
  ) 
}

function frameIt() {
  $("img").addClass("tasty");
  console.log("framIt Ran!!!")
}

function pressIt() {
  
}




$(document).ready(function(){

// call functions here
  
  $('img').on("load", frameIt())
  $('form input').on('keydown', pressIt())

});

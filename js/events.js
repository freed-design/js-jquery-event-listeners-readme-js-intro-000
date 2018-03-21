//define functions here
function getIt() {
  $('p').on("click", function()
    alert("Hey!");
    console.log();("getIt ran!")
  ) 
}

function frameIt() {
  $('img').on("load", function()
    $("img").addClass("tasty");
    console.log("framIt Ran!!!")
  )
}

function pressIt() {

}




$(document).ready(function(){

// call functions here


  $('form input').on('keydown', pressIt())

});

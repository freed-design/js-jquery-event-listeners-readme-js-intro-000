//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
    console.log();("getIt ran!")
  })
}

function frameIt() {
  $('img').on("load", function(){
    $("img").addClass("tasty");
    console.log("framIt Ran!!!")
  })
}

function pressIt() {
  $('form input').on('keydown', function(key) {
    if (key.which == 71) {
      alert("G was pressed!")
    }
  })
}




$(document).ready(function(){

// call functions here




});

//define functions here
function getIt() {
  alert("Hey!");
  console.log();("getIt ran!")
}

function frameIt() {
  $("img").addClass("tasty");
  console.log("framIt Ran!!!")
}

function pressIt() {

}


}

$(document).ready(function(){

// call functions here
  $('p').on("click", getIt())
  $('img').on("load", frameIt())

});

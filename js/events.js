//define functions here
function getIt() {
  alert("Hey!");
}

$(document).ready(function(){

// call functions here
  $('p').on("click", getIt())

});

function getUserInput() {
  var user_input = document.getElementById('user_input').value
  $("#display").text(user_input);
}

$(document).ready(function(){
    $(".Button").click(function(){
    getUserInput();
    });
});

var a;
var b;
function user(){
a = document.getElementById("username1").value;
b = document.getElementById("username2").value;
localStorage.setItem("pla1",a);
localStorage.setItem("pla2",b);
window.location="game_start.html";
}

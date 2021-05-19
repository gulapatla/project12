var p1 = localStorage.getItem("pla1");
var p2 = localStorage.getItem("pla2");
document.getElementById("player1").innerHTML= p1 + ":-";
document.getElementById("player2").innerHTML= p2 + ":-";
document.getElementById("qname").innerHTML= p1;
document.getElementById("aname").innerHTML= p2;
var question;
var answer;
var answero;
var questiono;
var checko;
var alltogether;
var value1 = "Type your question here";
var value2 = "Type your answer here";
var answercheck;
var player1= 'true';
var player2= 'false';
var qpla = 'player1'
var apla= 'player2'
var score1 = 0;
var score2 = 0;

function submitq(){
    question = document.getElementById("qmath").value;
    document.getElementById("qmath").value = value1;
}
function submita(){
    answer = document.getElementById("amath").value;
    document.getElementById("amath").value = value2;
    questiono= "<h4 id='word_display'>Q. "+question+"</h4>";
    answero = "<br>A.<input id='answerp'>";
    checko = "<br><br><button id='but2' type='button' onclick='watch()'>Click me</button>";
    alltogether = questiono+answero+checko;
    console.log(alltogether);
    document.getElementById("dynamicMadness").innerHTML= alltogether;
}
function watch(){
    answercheck = document.getElementById("answerp").value;
    console.log(answercheck);
    if(answercheck == answer){
        if(qpla == 'player1'){
            score1= score1 + 1;
            document.getElementById("s2").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("s1").innerHTML = score2;
        }
        document.getElementById("stupidThing").innerHTML = 'Thats Right';
        }
        else{
            document.getElementById("stupidThing").innerHTML='Thats wrong';
        }
        if(qpla == 'player1'){
        
            qpla = 'player2';
            apla = 'player1';
            document.getElementById("qname").innerHTML=p2;
            document.getElementById("aname").innerHTML=p1;
        }
        else{
            qpla = 'player1';
            apla = 'player2';
            document.getElementById("qname").innerHTML=p1;
            document.getElementById("aname").innerHTML=p2;
        
        
        }
        document.getElementById("dynamicMadness").innerHTML='<br><br>';
    
    }
    
    
var scoreP1 = 0;
var scoreP2 = 0;
var n1 = "";
var n2 = "";
var turnoDePergunta = "player1";
var turnoDeResposta = "player2";

var nome1 = localStorage.getItem("player1");
var nome2 = localStorage.getItem("player2");
function carregou(){

 document.getElementById("player1_name").innerHTML = nome1 + ":"
 document.getElementById("player2_name").innerHTML = nome2 + ":"

 document.getElementById("player1_score").innerHTML = scoreP1;
 document.getElementById("player2_score").innerHTML = scoreP2;

document.getElementById("turnoPergunta").innerHTML = nome1;
document.getElementById("turnoResposta").innerHTML = nome2;
}

function enviar(){
n1 = document.getElementById("n1").value;
n2 = document.getElementById("n2").value;
var questaoCompleta = "<h4>" + n1 + "x" + n2 + "</h4>";
document.getElementById("questão").innerHTML = questaoCompleta;
}

function checar(){ 
    var atualQuestao = n1 * n2;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";

    var pegarResposta = document.getElementById("resposta").value;

    if(pegarResposta == atualQuestao){
        if(turnoDeResposta == "player1"){
            scoreP1 = scoreP1 + 1;
            document.getElementById("player1_score").innerHTML = scoreP1;
        }
        else{
           scoreP2 = scoreP2 + 1;
           document.getElementById("player2_score").innerHTML = scoreP2; 
        }
    }

    if(turnoDePergunta == "player1"){
        turnoDePergunta = "player2"
        turnoDeResposta = 'player1'
        document.getElementById("turnoPergunta").innerHTML = nome2;
        document.getElementById("turnoResposta").innerHTML = nome1;
    }
    else{
        turnoDePergunta = "player1"
        turnoDeResposta = "player2"
        document.getElementById("turnoPergunta").innerHTML = nome1;
        document.getElementById("turnoResposta").innerHTML = nome2;
    }
    document.getElementById("questão").innerHTML = ""
}
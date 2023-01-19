function addUser(){
    var nome1 = document.getElementById("P1").value;
    var nome2 = document.getElementById("P2").value;
    
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);

    window.location="game.html";
}
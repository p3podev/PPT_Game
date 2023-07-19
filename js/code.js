function eleccion(jugada) {
    let resultado = " ";
    if (jugada == 1) {
        resultado = "Chose Rock 👊"
    } else if (jugada == 2) {
        resultado = "Chose Paper ✋"
    } else if (jugada == 3) {
        resultado = "Chose Scissor ✌"
    } else {
        resultado = "Chose wrong 😶"
        window.location.reload()
    }
    return resultado;
}
function batalla(player1, player2) {
    let wins=0;
    let loses =0;
    let result=" "
    if (pc == jugador) {
        result="DRAW";
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        result="YOU WIN";
    }
    else {
        result="YOU LOSE";
    }
    return (result)
}
//1. Piedra 2. Papel  3.Tijera
let jugador = 0
let pc = 0
let wins = 0;
let loses = 0;
while (wins < 2 && loses < 2) {
    pc = Math.floor(Math.random() * 3) + 1;
    jugador = prompt("Choose 1 for rock 2 for paper 3 for scissors")
    alert("PC " + eleccion(pc))
    alert("Player " + eleccion(jugador))
    //COMBATE
    resultado=batalla(jugador,pc)
    alert(resultado)
    if(resultado=="YOU WIN"){
        wins++
    }else if(resultado=="YOU LOSE") {
        loses++
    }
}
if (wins>loses){
    alert("Congrats You Win The Game")
}
else {
    alert("Sorry :( Game Over")
}
alert("You Wins " + wins + " Times and You Loses " + loses + " Times")
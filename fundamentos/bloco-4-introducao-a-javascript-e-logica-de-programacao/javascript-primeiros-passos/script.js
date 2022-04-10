// let é alteravel
// const não é alteravel (é constante)

const myName = "Justo";
const birthCity = "Macatuba";
const birthYear = 2003;

console.log(myName, birthCity, birthYear)

let movie = "Avengers"; //string literal
let score = 10.89; //number literal
let isValid = true; //boolean
let name; //undefined
let color = null; //redefinivel

const base = 5;
let height = 8;
const area = base * height;

console.log(area);

//if - se
//else - senão

let horarioTrybe = 15;

if (horarioTrybe >= 14 && horarioTrybe < 14.40) {
    console.log("Esquenta")
}
else if (horarioTrybe >= 16.30  && horarioTrybe <17.50) {
    console.log("Aula ao vivo")
}
else if (horarioTrybe >= 19.40 && horarioTrybe <20){
    console.log("Fechamento")
}
else {
    console.log("Fora dos momentos sincronos")
}

const notaDesafioTecnico = 50;

if (notaDesafioTecnico >= 80) {
    console.log("Parabéns você foi aprovado(a) no desafio técnico.")
}
else if (notaDesafioTecnico <80 && notaDesafioTecnico >60) {
    console.log("Você está na nossa lista de espera.")
}
else {
    console.log("Você foi reprovado.")
}

//&& significa AND, tipo isso E aquilo
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//|| precisa que apenas uma das demais condições sejam verdadeiras
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//O ! pode inverter o valor booleano de um objeto

//swithc -- case

let trafficLight = "amarelo";


switch (trafficLight) {
    case "vermelho":
        console.log("Pare!");
        break;
        
    case "amarelo":
        console.log("Atenção");
        break;
    
    case "verde":
        console.log("Siga");
        break;
    
    default:
        console.log("Valor não identificado");
}
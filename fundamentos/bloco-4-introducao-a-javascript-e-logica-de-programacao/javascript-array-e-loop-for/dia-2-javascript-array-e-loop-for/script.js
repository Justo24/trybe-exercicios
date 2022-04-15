let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
 Exercicio 1
for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i])
} 
*/
/*
Exercicio 2
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum);
*/

let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    for (let i = 0; i <= numbers.length; i){
        console.log(sum/numbers[i])
    }
}


// Code your solutions in this file
function writeCards(arrayElement, eventName){
    const arrName = [];    
    for (let i = 0; i < arrayElement.length; i++){
            let message = (`Thank you, ${arrayElement[i]}, for the wonderful ${eventName} gift!`);
      
        arrName.push(message);           
        }
return arrName;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(number){

while (number >= 0){
console.log(number--);}
return
}
countDown (10);
for(let i=1;i<=5;i++){
    console.log("apna college");
}
console.log("loop has ended");

let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
}
console.log("sum:"+sum);
console.log("loop has ended");
for(let i=1;i<=10;i++){
    console.log("i:"+i);
}
console.log("loop has ended");

// for(let i=1;i>=0;i++){
//     console.log(i);//Infinite loop// don't run these program.
// }
let i=1;
while(i<=5){
    console.log("i:",i);
    i++;
}
let j=20;
do{
    console.log("Apna duniya");
    j++;
}while(j<=10);

let str="Apna college";
for(let i of str){
    console.log(i);
}
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("String size:"+size);
let student={
    name:"Rahul Kumar",
    age:20,
    cgpa:7.5,
    isPass:true
};
for( let key in student){
    console.log("key:",key,"value:", student[key]);
}
console.log("Even numbers from 0-100:")
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
let gameNum=25;
let userNum=prompt("Guess the game number:");
while(userNum!=gameNum){
    userNum=prompt("You entered the wrong number, Guess again.")
}
console.log("congratulations, you entered the right number.");
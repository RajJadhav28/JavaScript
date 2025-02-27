// for-of loop
let str="ApnaCollege";
let size=0;
for(let i of str){
    console.log("i:",i);
    size++;
}console.log("String size:",size);
let student={
    name:"Rahul Kumar",
    age:25,
    cgpa:7.5,
    isPass:true
};
for(let key in student){
    console.log(key,":",student[key]);
}
let gameNum=25;
 let userNum=prompt("Guess the game number:");
    // console.log(user);
 while(userNum!=gameNum){
    userNum=prompt("You entered the wrong number, Guess again:");
 }
 console.log("you enetered the right number.")
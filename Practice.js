alert("Hello");//one time popup
let name=prompt("Welcome");
console.log(name);
let num=prompt("enter a number:");
if(num%5==0){
    console.log("Yes it is a multiple of 5-",num);
}else{
    console.log("Not a multiple of 5-",num);
}
let score=prompt("Enter the score:");
if(score>=90 && score<=100){
    grade="A";
} else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=35 && score<=49){
    grade="E";
}else if(score>=0 && score<=34){
    grade="F";
}
console.log("According to score, your grades is:",grade);

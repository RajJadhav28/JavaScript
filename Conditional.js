let age=17;
if(age>=18){
    console.log("you can vote!!!");
}
if(age<18){
    console.log("You Cannot vote!!!");
}
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="light";
}
console.log(color);
//odd or even
let n=2;
if(n%2==0){
    console.log("n="+n);
    console.log("even");
}else if(n%2!=0){
    console.log("odd");
}else{
    console.log("Enter a valid number.");
}
if(mode==="dark") console.log(mode);
let age1=25;
//1st type
let result=age1>=18?"adult":"not adult";
console.log(result);
let age2=21;

//second type.
let result1=age2>=18 ? console.log("adult"):console.log("not adult");

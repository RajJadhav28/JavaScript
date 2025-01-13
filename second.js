let fullName="tony stark brain";
console.log(fullName);
let age=24;
let totalPrice=1000;

console.log(age);
const PI=3.14;
console.log(PI);
let a;
console.log("A:"+a);
a=10;
console.log(a);
{
    let b=50;
    console.log("First block:")
    console.log("B:"+b);
}
{
    let b=40;
    console.log("Second block:");
    console.log("B:"+b);
}
let age1=24;
let price=100.50;
typeof age1
console.log(typeof age1);
let full_name="Apna College";
console.log(typeof full_name);
let isFollow=true;
console.log(typeof isFollow);
let x;
console.log(typeof x);//undefined will be the output.
console.log(x);//undefined will be the output.
let y=null;
console.log(typeof y);//object will be output
console.log(y);//null will be output
let z=null;
console.log(z);//null will be output
console.log(typeof z);//object will be output
let w=BigInt("123");
console.log(w);
console.log(typeof w);
let w1=Symbol("Hello");
console.log(w1);
console.log(typeof w1);

const student={
    fullName:"Sonu Yadav",
    age:20,
    cgpa:802,
    isPass:true
};
console.log(student);
console.log(typeof student);
console.log(student["fullName"]);
console.log(student.age);//1st method to access key of object
console.log(student["age"]);//2nd method to access key of object
student.age=student.age+1;

console.log(student.age);
//or
student["age"]=student["age"]+1;
console.log(student["age"]);
student["fullName"]="Rahul Sharma";
console.log(student["fullName"]);
//or
console.log(student.fullName);

const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270
};
console.log(product);
console.log(typeof product);
const profile={
    username:"Raj Jadhav",
    isFollow:false,
    followers:123,
    following:123
};
console.log(profile);
console.log(typeof profile);//o/p--object
console.log(typeof profile["username"]);// o/p--string
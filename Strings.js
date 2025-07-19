let str="ApnaCollege";
let str2='ApnaCollege2';
console.log(str);
console.log(str2);
console.log(str[0]);
//Template Literals
let specialString=`This is a template literal`;
console.log(typeof specialString);
console.log(specialString);

let obj={
    item:"pen",
    price:10,
};
console.log("the cost of",obj.item,"is",obj.price,"rupees");
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
let specialString1=`This is a template literal ${1+2+3}`;
console.log(specialString1);
console.log( typeof specialString1);
console.log(`Apna \n college`);
console.log(`Apna \t college`);
console.log(specialString1.length);
console.log(specialString1.slice(1,4));
console.log(specialString1.slice(1));
let str3="Apna";
let str4="College";
let res=str3.concat(str4);
console.log(res);
let res1=str3+str4;
console.log(res1);
let res2=`I am learning coding from ${str3+str4}`;
console.log(res2);
let res3="hello"+123;
console.log(res3);
console.log(res.replace("A","S"));
console.log(res.replaceAll("l","s"));
console.log(res.charAt(1));
res3=res3.replace("h","m");
console.log(res3);
let fullname=prompt("Enter your full name without spaces");
console.log(fullname);
let username="@"+fullname+fullname.length;
console.log(username);
let str5="IlOveJs";
str5[0]="S";
console.log(str5);
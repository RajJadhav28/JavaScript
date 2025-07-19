let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let heroes=["Ironman","Thor","Shaktiman","Spiderman","Superman","Antman"];
console.log(heroes);
console.log(typeof marks);
console.log(marks[4]);
console.log(marks[5]);
marks[4]=35;
console.log(marks[4]);

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
console.log("===========");
for(let el of heroes){
    console.log(el);
}
for(let el of heroes){
    console.log(heroes.join(' '));//Using join
}
console.log(`${heroes.join(' ')}`);//Using template literals

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum=sum+marks[i];
}
let average=sum/marks.length;
console.log(average);
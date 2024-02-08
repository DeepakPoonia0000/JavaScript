let a={
    name:'deepak',
    sal:2000,
    art:'poert',
    city:'hisar'
}

let b=[a,1,2,3]

console.log(b);
let keys = Object.keys(a);
console.log(keys);
let elem=Object.values(a);
console.log(elem);
console.log(keys[2]);
console.log(a[keys[2]]);
console.log(elem[2]);


// console.log(keys[0]);
// console.log(b[0]);


// class Animal{
//     constructor(name){
//         this.name = name
//         console.log("Object is created ...")
//     }

//     eats(){
//         console.log("Kha raha hoon")
//     }
//     jumps(){
//         console.log("Kood raha hoon")
//     }
// }

// class lion extends Animal{

// }

// let a=new Animal("fox");
// console.log(a);
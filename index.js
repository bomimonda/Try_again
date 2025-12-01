// console.log("hello");
// let num = [1, 47, 9];

// function Working(num) {
//   let max = Math.max(...num);
//   let min = Math.min(...num);

//   for (let i = min; i <= max; i++) {
//     num.push(i);
//   }

//   let a = num.slice(num.indexOf(max) + 1, num.length);

//   return a;
// }

// console.log(Working(num));



// let hom=[1,2,1,4,5,6,3,5,1]


// let a=hom.filter((val,ind,arr)=>{
//     return arr.indexOf(val)===ind?arr[ind]:""
// })

// console.log(a);




// let wovwl=["a","e","i","o","u"]
// let word="hello world"
// word=word.split("")
// console.log(word);

// let wop={count:0}
// for(let out=0;out<=word.length-1;out++){
//     for(let inn=0;inn<=wovwl.length-1;inn++){
//         if (word[out]==wovwl[inn]) {
//               wop.count=wop.count+1
//         }
//     }
// }


// console.log(wop);




// let larggest=[1,30,60,20,35]
// let me=larggest[0]

// for(let out=0;out<=larggest.length-1;out++){
//     for(let inn=1;inn<=larggest.length-1;inn++){
//             if (larggest[out]>larggest[inn]) {
//                  return
//             }else{
//                return  [larggest[out]]=[larggest[inn]]
//             }
       
//     }
// }


// console.log(larggest);




let negative=[1,3,4,-10,-50,44,78]
let negsto=[]
for(let i=0;i<negative.length-1;i++){
   if(negative[i]<0){
     negsto.push(negative[i])
   }
}

console.log(negsto);
console.log("Helllo");



let com=[1,4,7,3,5]
let com1=[22,33,1,4,7,6]

for(let i=0;i<com1.length;i++){
  for (let index = 0; index < com.length; index++) {
     if (com1[i]!==com[index]) {
      com1[i]="false"
     }
     if (com1[i]==com[index]) {
         com1[i]="true"
     }
    
    
    
  }
}

console.log(com1);


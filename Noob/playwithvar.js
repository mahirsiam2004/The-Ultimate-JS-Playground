let names=['mahir','siam','riyad','shafayet','shawon'];

let index=-1;
let name=names[++index];

setInterval(()=>{
    name=names[index++];
    console.log(name, name.length);
},1000);

// for(;;){
//     console.log("mahir");
// }
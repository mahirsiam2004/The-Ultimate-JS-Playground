console.log("Hello world");
const mahir = {
    name:"mahir",
    age:21,
    married:false,
    salary:0,
    'fav places' :['coxs-bazar','dhaka','rajshahi']
}
mahir.salary=2500; //updating salary useing dot
mahir['age']=20; //updaing age useing [bracket]
console.log(mahir);

const  computer = {
    name:'dell',
    sdd:512,
    ram:8
}
const every_compunet=Object.keys(computer) //for properties in object
console.log(every_compunet)

const every_values=Object.values(computer) //for propertie values in object
console.log(every_values)


const collage={
    name:'hakimpur govt collage',
    year :2023,
    events :['sok dibos','bijoy dibos']

}
collage.events[1]='mahir change korce' // changed collage events useing index
console.log(collage);

const sokal={
    name:'khadija sokal',
    age:21,
    weight:50
}
//************************************************************************************************** */

function get_total(products){
    let total=0
    for(const product of products){
        total=total+product.price
    }
    return total
}
const products=[
    { name:'perfume', price:450},
    { name:'cream', price:200}
]

const total=get_total(products)
console.log(total)
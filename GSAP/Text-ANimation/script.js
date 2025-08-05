function breaktext(){
    var h1 = document.querySelector("h1");
var h1text = h1.textContent;

var test = h1text.split('');
var clutter=""
test.forEach(function(bal){
    clutter+=`<span>${bal}</span>`
})
h1.innerHTML=clutter;
 
}

breaktext();

gsap.from("h1 span",{
y:70,
opacity:0,
duration:1,
delay:0.5,
stagger: 0.15
})
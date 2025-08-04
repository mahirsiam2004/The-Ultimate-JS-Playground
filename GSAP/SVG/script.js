// var initial=`M 10 100 Q 250 100 490 100`
// var initial=`M 10 100 Q 250 100 490 100`

let path=`M 10 100 Q 500 100 990 100`;
let finalpath=`M 10 100 Q 500 100 990 100`
let string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})


string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})
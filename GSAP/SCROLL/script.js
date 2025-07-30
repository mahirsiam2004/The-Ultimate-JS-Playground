gsap.from("#page-1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page-2 #box",{
    scale:0,
    // delay:1,
    duration:2,
    rotate:360,
    // scrollTrigger:"page-2 #box"
    scrollTrigger:{
        trigger:"#page-2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
// gsap.from("#page-1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page-2 #box",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"page-2 #box"
//     scrollTrigger:{
//         trigger:"#page-2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

gsap.from("#page-2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page-2 h1",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#page-2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page-2 h2",
    markers: true,
    start: "top 50%",
  },
});
gsap.from("#page-1 #box", {
    scale:0,
  opacity: 0,
  rotate:720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page-1 #box",
    scroller:"body",
    markers: true,
    start: "top 60%",
    // end:"top 10%",
    scrub:2,
    pin:true
  },
});
<<<<<<< HEAD

gsap.from("#page-3 #box", {
    scale:0,
  opacity: 0,
  rotate:720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page-3 #box",
    scroller:"body",
    markers: true,
    // start: "top 50%",
    // end:"top 10%",
    scrub:2,
    // pin:true
  },
});
=======
// gsap.from("#page-3 #box", {
//     scale:0,
//   opacity: 0,
//   rotate:720,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page-3 #box",
//     scroller:"body",
//     markers: true,
//     // start: "top 50%",
//     // end:"top 10%",
//     scrub:2,
//     // pin:true
//   },
// });

>>>>>>> c0e4a39 (fully buggy scrooltrigger)

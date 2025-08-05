gsap.to(".box-1", {
  x: 840,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});
gsap.from(".box-2", {
  x: 840,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "gray",
  repeat: -1,
  yoyo: true,
});

// gsap.to(".box-2",{
//  x:0,duration:2,delay:1
// })

gsap.from("h1", {
  scale: 1.2,
  duration: 2,
  y: 30,
  delay: 1,
  stagger: 0.1,
  lineHeight: 2,
  repeat:-1,
  yoyo: true
});


var tl=gsap.timeline()

tl.to("box-1",{

})
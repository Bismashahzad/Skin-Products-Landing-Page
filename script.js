const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videocon_animation(){
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter",function(){
       gsap.to(playbtn,{
        scale :1,
        opacity :1
       })
    
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale :0,
            opacity :0
           })
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
           left:dets.x-20,
           top:dets.y-20,
           })
    })
} //dets are used to tell the detailing of event happen with element

videocon_animation();
function loading_animation(){
    gsap.from("#page1 h1",{
        y:+150,
        opacity:0,
        delay:0.5,
        duration:1.2,
        stagger:0.3,
     
     })
     gsap.from("#products h1",{
        x:150,
        delay:2,
        opacity:0,
        duration:1.5,
        sragger:0.3,
     })
     gsap.from("#.Categories h1",{
        x:200,
        delay3,
        opacity:0,
        duration:1.5,
    })
     gsap.from(".details h1",{
        x:-200,
        delay:3,
        opacity:0,
        duration:2,
        sragger:0.4,
     })
     gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration: 0.7,
        
     })
}
loading_animation();

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
    })
})


var a =document.querySelectorAll(".child")
a.forEach(function(el) {
    el.addEventListener("mouseenter",function()
    {
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(1)`
        })
    })
    el.addEventListener("mouseleave",function()
    {
        gsap.to("#cursor",{
            transform: `translate(-50%,-50%) scale(0)`,
        })
    })

})
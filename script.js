var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");


icons.forEach(function(val, index){
    val.addEventListener("click", function(){
        dullandbright();
        shadow.style.transform = `translateX(${index*100}px)`
        // means jis index pe click hoga uss index*100 time shadow ko x axis mein move kar do 
        // 0 pe 0, 1 pe 100px, 2 pe 200px, 3 pe 300px(pehele tha 25px 0 pe, 1 pe 125px, 2 pe 225px and 3 pe 325px)

        gsap.to("#shadow",{
            x: index*100,
            ease: Expo.easeInOut,
            duration: .23
        })
        gsap.to(this.children, {
            opacity: 1
        }) //jis pe click hua hai us ko bright karne ke liye
    })
})

function dullandbright(){
    gsap.to(".icon i",{
        opacity: .3
        // icons ko dull karne ke liye
    })
}




window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})


var circle = document.getElementById("circle");
var panel = document.getElementById("panel");

panel.addEventListener("mouseenter", function() {
    circle.style.backgroundColor = "white";
});

panel.addEventListener("mouseleave", function() {
    circle.style.backgroundColor = "black";
});










// var circle = document.querySelector("#circle");
// var panel = document.querySelector("#panel");
// panel.addEventListener("mousemove", function(dets){

//     gsap.to("#panel icon", {
//         color: "#fff",
        
//     })

// })

// frame.addEventListener("mouseleave", function(dets){
   
//     gsap.to("#panel icon", {
//         color: "#000",
        
//     })
    
   
// })







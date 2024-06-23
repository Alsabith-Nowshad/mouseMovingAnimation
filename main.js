let box1 = document.querySelector(".box1")
let img1 = document.querySelectorAll(".img1")

let box2 = document.querySelector(".box2")
let img2 = document.querySelectorAll(".img2")

let box3 = document.querySelector(".box3")
let img3 = document.querySelectorAll(".img3")

// img 1

box1.addEventListener("mousemove",function(e){
    coordsX = e.clientX
    coordsY = e.clientY
    console.log(coordsX);
    console.log(coordsY);

    animateImg1()
})

function animateImg1(){
img1.forEach(function(img1,index){
    img1.style.left = coordsX - 350 + "px"
    img1.style.top = coordsY  -120 + "px"
})
}


// img2


box2.addEventListener("mousemove",function(e){
    coordsX = e.clientX
    coordsY = e.clientY
    console.log(coordsX);
    console.log(coordsY);

    animateImg2()
})

function animateImg2(){
img2.forEach(function(img2,index){
    img2.style.left = coordsX - 350 + "px"
    img2.style.top = coordsY -  470 + "px"
})
}


// img3


box3.addEventListener("mousemove",function(e){
    coordsX = e.clientX
    coordsY = e.clientY
    console.log(coordsX);
    console.log(coordsY);

    animateImg3()
})

function animateImg3(){
img3.forEach(function(img3,index){
    img3.style.left = coordsX - 350 + "px"
    img3.style.top = coordsY -  730 + "px"
})
}
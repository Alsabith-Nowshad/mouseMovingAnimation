let box1 = document.querySelector(".box1")
let img1 = document.querySelector(".img1")

let box2 = document.querySelector(".box2")
let img2 = document.querySelector(".img2")

let box3 = document.querySelector(".box3")
let img3 = document.querySelector(".img3")



    box1.addEventListener("mousemove",function(){
        img1.style.display = "block"
        // img1.style.top = 
        showCoords(event)
    })
    box1.addEventListener("mouseleave",function(){
        img1.style.display = "none"
    })



    box2.addEventListener("mousemove",function(){
        img2.style.display = "block"
    })
    box2.addEventListener("mouseleave",function(){
        img2.style.display = "none"
    })


    box3.addEventListener("mousemove",function(){
        img3.style.display = "block"
    })
    box3.addEventListener("mouseleave",function(){
        img3.style.display = "none"
    })


    function showCoords(event) {
        let cX = event.clientX;
        let cY = event.clientY;
        console.log(cX,cY);
        // let sX = event.screenX;
        // let sY = event.screenY;
        // let coords1 = "clientX: " + cX + ", clientY: " + cY;
        // let coords2 = "screenX: " + sX + ", screenY: " + sY;
        // let text = coords1 + coords2;
      }
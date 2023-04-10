// storing idof left and right button to variable
const SlideLeft = document.querySelector("#slider_btn_left");
const SlideRight = document.querySelector("#slider_btn_right");
const ImgItem = document.querySelectorAll(".img_item");

const start = 0;
const end = (ImgItem.length - 1) * 100;


//adding event listners to btns
SlideLeft.addEventListener("click", () => {
    if(start >= 0){
        start = start + 100;
    }
    ImgItem.forEach(element =>{
        element.getElementsByClassName.transform = `translateX(${start}%)`;
    });
});

SlideRight.addEventListener("click", ()=>{
    if(start >= -end + 100){
        start = start - 100;
    }
    ImgItem.forEach(element =>{
        element.getElementsByClassName.transform = `translateX(${start}%)`;
    });
});
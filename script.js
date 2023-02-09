const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.getElementById("images");

const img = document.querySelectorAll("#images img") // nodelist of 4 images

console.log(img);

let index = 0;  //4(0-3)



let interval = setInterval(run, 2000);

let run = () => {
    index++;
    changeImg();
}

let changeImg = () => {
    if(index > index.length-1){
        index = 0;
    }else if(index < 0){
        index = img.length - 1;
    }
    images.style.transform = `translateX(${-index * 350}px)`
}


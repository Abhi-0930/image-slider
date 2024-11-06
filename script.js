const left = document.querySelector('.left');

const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image')
let slidenumber = 1;
const nextslide=()=>{
    slider.style.transform = `translateX(-${slidenumber * 800}px)`;
        slidenumber++;
};
const getfirstslide=()=>{
    slider.style.transform=`translateX(0px)`;
        slidenumber=1 ;
};
right.addEventListener('click', () => {
    if (slidenumber < images.length) {
        nextslide();
    }else{
       getfirstslide();
    }

})


const prevslide=()=>{
    slider.style.transform = `translateX(-${(slidenumber-2) * 800}px)`;
        slidenumber--;   
};

const getlastslide=()=>{
    slider.style.transform=`translateX(-${(img.length-1)*800}px)`;
        slidenumber=img.length ;
};


left.addEventListener('click', () => {
    if (slidenumber < images.length) {
        prevslide();
    }else{
       getlastslide();
    }

}) 

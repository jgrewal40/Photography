let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}











let naturecollapse = document.querySelectorAll(".picturecollapse");
let natureIndex = 1;

function naturecycle() {
    naturecollapse.forEach(pic => {
        pic.classList.remove("pictureactive");
    });
    naturecollapse[natureIndex].classList.add("pictureactive");
    if (natureIndex >= naturecollapse.length - 1) {
        natureIndex = 0;
    }
    else {
        natureIndex++;
    }
}
let autofunction = setInterval(naturecycle, 2000);
console.log(autofunction);

function naturehover(id){
    clearInterval(autofunction);
    console.log(autofunction);
    const temp = document.getElementById(id);
    naturecollapse.forEach(pic => {
        pic.classList.remove("pictureactive");
    });
    temp.classList.add("pictureactive");
    natureIndex = id;

}

function natureOnLeave(){
    clearInterval(autofunction);
    autofunction = setInterval(naturecycle, 2000);
}










const screenpics = ['assets/frame.png', 'assets/secondoption.png'];
let screenIndex = 0;

function changepic(direction) {
    if (direction == 'left') {
        if (screenIndex == 0) {
            screenIndex = screenpics.length - 1;
        }
        else {
            screenIndex--;
        }
    }
    if (direction == 'right') {
        if (screenIndex == screenpics.length - 1) {
            screenIndex = 0;
        }
        else {
            screenIndex++;
        }
    }
    let currentpic = document.getElementById("framepic");
    currentpic.src = screenpics[screenIndex];
    console.log(screenIndex);
}







const cars = document.querySelectorAll('.leftpic');
const carsl = document.querySelectorAll('.rightpic');
const wordl = document.querySelectorAll('wordleft');
const wordr = document.querySelectorAll('wordright');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    })
},
{
    threshold: 0.3,
}
)

cars.forEach(car => {
    observer.observe(car);
})
carsl.forEach(carl =>{
    observer.observe(carl);
})
wordl.forEach(word =>{
    observer.observe(word);
})
wordr.forEach(word =>{
    observer.observe(word);
})
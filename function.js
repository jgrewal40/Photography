let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}











let naturecollapse = document.querySelectorAll(".picturecollapse");
let natureIndex = 0;

function natureHover() {
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
setInterval(natureHover, 2000);












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







// const cars = document.querySelectorAll('.leftpic');
// const carsl = document.querySelectorAll('.rightpic');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle("show", entry.isIntersecting);
//     })
// },
// {
//     threshold: 0.3,
// }
// )

// cars.forEach(car => {
//     observer.observe(car);
// })
// carsl.forEach(carl =>{
//     observer.observe(carl);
// })
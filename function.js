let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}


const pics = document.querySelectorAll('.portraits')

function hoverlisten(){
    pics.forEach(pic => {
        pic.addEventListener('mouseenter', () => {
            console.log("jattup");
            pic.classList.add('portraitup');
        })
        pic.addEventListener('mouseleave', () => {
            console.log("jattdown");
            pic.classList.remove('portraitup');
        })
    })
}

hoverlisten();











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

let canGo = false;

function setTrue(){
    canGo = true;
}

function naturehover(id) {
    if (canGo == true) {
        clearInterval(autofunction);
        const temp = document.getElementById(id);
        naturecollapse.forEach(pic => {
            pic.classList.remove("pictureactive");
        });
        temp.classList.add("pictureactive");
        natureIndex = id;
        canGo = false;
    }
    setTimeout(setTrue, 600);
}

function natureOnLeave() {
    clearInterval(autofunction);
    autofunction = setInterval(naturecycle, 2000);
}



const cars = document.querySelectorAll('.leftpic');
const carsl = document.querySelectorAll('.rightpic');
const wordl = document.querySelectorAll('.wordleft');
const wordr = document.querySelectorAll('.wordright');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if(entry.isIntersecting)observer.unobserve(entry.target);
    })
},
    {
        threshold: 0.3,
    }
)



cars.forEach(car => {
    observer.observe(car);
})
carsl.forEach(carl => {
    observer.observe(carl);
})
wordl.forEach(word => {
    observer.observe(word);
})
wordr.forEach(word => {
    observer.observe(word);
})
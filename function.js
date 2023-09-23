let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}



const cars = document.querySelectorAll('.leftpic');
const carsl = document.querySelectorAll('.rightpic');
const wordl = document.querySelectorAll('.wordleftbox');
const wordr = document.querySelectorAll('.wordrightbox');
const portrait = document.querySelectorAll('.portraittext');
const naturetext = document.querySelectorAll('.naturetext');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
        console.log("JATTI");
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
portrait.forEach(pic => {
    observer.observe(pic);
})
naturetext.forEach(nat =>{
    observer.observe(nat);
})



const lbimages = document.querySelectorAll('.portraits');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


lbimages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const pic = document.createElement('img')
        pic.src = img.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(pic);
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget){
        return;
    }
    lightbox.classList.remove('active');
})

















const natprev = document.querySelectorAll('.naturediv');

function natpreview() {
    natprev.forEach(nat => {
        nat.addEventListener('mouseenter', () => {
            nat.classList.add('naturehighlight');
            const temp = nat.parentElement;
            console.log(temp.classList);
            if (!temp.classList.contains('pictureactive')) {
                nat.classList.add('naturehighlight');
            }
            else {
                nat.classList.remove('naturehighlight');
            }
            nat.addEventListener('mouseleave', () => {
                nat.classList.remove('naturehighlight');
            })
        })
    })
}
natpreview();


const nature = document.querySelectorAll('.picturecollapse');
function naturehover() {
    nature.forEach(np => {
        np.addEventListener('click', () => {
            if (!np.classList.contains('pictureactive')) {
                const temp = np;
                nature.forEach(npr => {
                    npr.classList.remove('pictureactive');
                    temp.classList.add('pictureactive');
                    const child = temp.querySelector('.naturediv');
                    child.classList.remove('naturehighlight');
                })
            }
        })
    })
}
naturehover();










function carnavigation(){
    const jump = document.getElementById('cars');
    jump.scrollIntoView({ behavior: 'smooth' });
}

function peoplenavigation(){
    const jump = document.getElementById('people');
    jump.scrollIntoView({ behavior: 'smooth' });
}

function naturenavigation(){
    const jump = document.getElementById('nature');
    jump.scrollIntoView({ behavior: 'smooth' });
}




let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}



const cars = document.querySelectorAll('.leftpic');
const carsl = document.querySelectorAll('.rightpic');
const wordl = document.querySelectorAll('.wordleft');
const wordr = document.querySelectorAll('.wordright');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
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


const lbimages = document.querySelectorAll('.portraits');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox'
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


let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}


const portrait = document.querySelectorAll('.portraittext');
const naturetext = document.querySelectorAll('.naturetext');


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








let lbimages;
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        return;
    }
    lightbox.classList.remove('active');
})


portrait.forEach(pic => {
    observer.observe(pic);
})
naturetext.forEach(nat => {
    observer.observe(nat);
})
























let natprev;

function carnavigation() {
    const jump = document.getElementById('cars');
    jump.scrollIntoView({ behavior: 'smooth' });
}

function peoplenavigation() {
    const jump = document.getElementById('people');
    jump.scrollIntoView({ behavior: 'smooth' });
}

function naturenavigation() {
    const jump = document.getElementById('nature');
    jump.scrollIntoView({ behavior: 'smooth' });
}



let lrcheck = 0;


function loadCars() {
    fetch('data.json')

        .then(response => response.json())
        .then(data => {
            const carcontainer = document.getElementById('carsection');

            // Loop through the JSON data and create sections dynamically.
            data.forEach(item => {
                const section = document.createElement('div');
                section.className = 'section';

                if (lrcheck % 2 == 0) {
                    const pic = document.createElement('div');
                    pic.className = 'leftpic';

                    const image = document.createElement('img');
                    image.src = item.image_src;
                    image.className = 'carpics';

                    const wordbox = document.createElement('div');
                    wordbox.className = ('wordrightbox');

                    const word = document.createElement('div');
                    word.className = 'word';

                    const title = document.createElement('p');
                    title.innerHTML = item.title;
                    title.className = 'cursive';

                    const body = document.createElement('p');
                    body.innerHTML = item.description;

                    carcontainer.appendChild(section);
                    section.appendChild(pic);
                    pic.appendChild(image);
                    section.appendChild(wordbox);
                    wordbox.appendChild(word);
                    word.appendChild(title);
                    word.appendChild(body);
                    lrcheck++;
                }
                else {
                    const pic = document.createElement('div');
                    pic.className = 'rightpic';

                    const image = document.createElement('img');
                    image.src = item.image_src;
                    image.className = 'carpics';

                    const wordbox = document.createElement('div');
                    wordbox.className = ('wordleftbox');

                    const word = document.createElement('div');
                    word.className = 'word';

                    const title = document.createElement('p');
                    title.innerHTML = item.title;
                    title.className = 'cursive';

                    const body = document.createElement('p');
                    body.innerHTML = item.description;

                    carcontainer.appendChild(section);
                    section.appendChild(pic);
                    pic.appendChild(image);
                    section.appendChild(wordbox);
                    wordbox.appendChild(word);
                    word.appendChild(title);
                    word.appendChild(body);
                    lrcheck++;
                }

            });
            const cars = document.querySelectorAll('.leftpic');
            const carsl = document.querySelectorAll('.rightpic');
            const wordl = document.querySelectorAll('.wordleftbox');
            const wordr = document.querySelectorAll('.wordrightbox');

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
        })
        .catch(error => console.error('Error loading JSON data:', error));
}
loadCars();




function loadportraits() {
    fetch('portraits.json')
        .then(response => response.json())
        .then(portraits => {
            const portraitparent = document.getElementById('portraitparent');

            portraits.forEach(item => {
                const shadow = document.createElement('div');
                shadow.className = 'shadow';

                const portraits = document.createElement('img');
                portraits.className = 'portraits';
                portraits.src = item.img_src;

                portraitparent.appendChild(shadow);
                shadow.appendChild(portraits);
            })
            lbimages = document.querySelectorAll('.portraits');
            lbimages.forEach(img => {
                img.addEventListener('click', () => {
                    lightbox.classList.add('active');
                    const pic = document.createElement('img')
                    pic.src = img.src;
                    while (lightbox.firstChild) {
                        lightbox.removeChild(lightbox.firstChild);
                    }
                    lightbox.appendChild(pic);
                })
            })
        })
        .catch(error => console.error('Error loading JSON data:', error));
}
loadportraits();









function loadnature() {
    fetch('nature.json')
        .then(response => response.json())
        .then(natures => {
            const natureparent = document.getElementById('naturecontainer');

            natures.forEach(item => {

                const picturecollapse = document.createElement('div');
                picturecollapse.className = item.class_name;

                const naturediv = document.createElement('img');
                naturediv.className = 'naturediv';
                naturediv.src = item.img_src;

                natureparent.appendChild(picturecollapse);
                picturecollapse.appendChild(naturediv);
            })

            natprev = document.querySelectorAll('.picturecollapse');
            console.log(natprev);

            natprev.forEach(nat => {
                nat.addEventListener('mouseenter', () => {
                    const temp = nat;
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
            });

            const nature = document.querySelectorAll('.picturecollapse');
            nature.forEach(np => {
                np.addEventListener('click', () => {
                    if (!np.classList.contains('.pictureactive')) {
                        const temp = np;
                        nature.forEach(npr => {
                            npr.classList.remove('pictureactive');
                            temp.classList.add('pictureactive');
                            temp.classList.remove('naturehighlight');
                        })
                    }
                })
            });

        })
        .catch(error => console.error('Error loading JSON data:', error));
}
loadnature();





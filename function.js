let head = document.getElementById('tophead');

function headExtend(){
    head.classList.add('headActive');
}

function headCollapse(){
    head.classList.remove('headActive');
}

let naturecollapse = document.querySelectorAll(".picturecollapse");
let natureIndex = 0;

function natureHover(){
    console.log(naturecollapse.length);
    naturecollapse.forEach(pic => {
        pic.classList.remove("pictureactive");
    });
    naturecollapse[natureIndex].classList.add("pictureactive");
    if(natureIndex >= naturecollapse.length - 1){
        natureIndex = 0;
    }
    else{
        natureIndex++;
    }
    console.log("jatt");
}
setInterval(natureHover, 2000);
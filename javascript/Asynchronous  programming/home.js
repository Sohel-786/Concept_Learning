
let i = 0;

let images = [
    "https://crazydomains.dreamscape.cloud/production/public/src/@master/containers/WebBuilderEcommerceLandingPage/static/Hero/hero_768.jpg?40034d", "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/03/Image_-_Free_online_store_.jpeg.jpg",
    "https://images.startups.co.uk/wp-content/uploads/2017/06/create-online-shop.jpeg"
];

let time = 3000;
let img = document.createElement('img');
img.setAttribute('class','slide_image');
img.src = 'https://s.tmimgcdn.com/scr/1200x627/99900/gstore-multipurpose-website-online-store-html-template-website-template_99942-2-original.jpg';

let img_slide = document.querySelector('.img_slide');
img_slide.append(img);

function slide_show(){

    
    if(i == images.length){
        i = 0;
    }
    img.src = images[i];
    i++;
    
}

setInterval(slide_show,time);

let students = [
    {
        name:"Gojo",
        attendance:99,
        img:'https://honeysanime.com/wp-content/uploads/2019/07/Jujutsu-Kaisen-Wallpaper-1-700x397.jpg'
    },
    {
         name:"Luffy",
         attendance:100,
         img:"https://www.looper.com/img/gallery/30-most-popular-boy-anime-characters-ranked-worst-to-best/l-intro-1648715126.jpg"
    },
    {
        name:"Goul",
        attendance:95,
        img:"https://www.tvovermind.com/wp-content/uploads/2018/03/Tokyo-Ghoul.jpg"
    },
    {
        name:"Saitama",
        attendance:82,
        img:"https://cdn0-production-images-kly.akamaized.net/DdNDcTRhA8PADmPYgx0QjSWHf-Y=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/936144/original/053715500_1437741125-One-Punch_Man-maxresdefault1.jpg"
    },
    {
        name:"Eren Yeager",
        attendance:93,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71i3UsNuNxL._SY679_.jpg"
    },
    {
        name:"Gon",
        attendance:98,
        img:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Featured-Image-Gon-Freecss-Cropped.jpg"
    }
];

if((localStorage.getItem('demostudents')) == null){
    localStorage.setItem('demostudents', JSON.stringify(students))

}


function showstudents(){
    let students = JSON.parse(localStorage.getItem('demostudents'));

    students.forEach(el => append_std(el));
}

let std_container = document.querySelector('.students');

let append_std = (el)=>{

    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.img;
    img.setAttribute('id','std_img');

    let h1 = document.createElement('h1');
    h1.innerHTML = el.name;

    let p = document.createElement('p');
    p.innerHTML = el.attendance;

    div.append(img,h1,p);
    
    std_container.append(div);

};

showstudents();

function sortlh(){

    let students = JSON.parse(localStorage.getItem('demostudents'));
    
    std_container.innerHTML = null;

    students = students.sort( (a,b) => {
        return a.attendance - b.attendance;
    })

    students.forEach(el => append_std(el));
}


function sorthl(){

    let students = JSON.parse(localStorage.getItem('demostudents'));
    std_container.innerHTML = null;

    students = students.sort( (a,b) => {
        return b.attendance - a.attendance;
    })

    students.forEach(el => append_std(el));
}
// https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB7-XEfjMbzB0g3UDHDG6XnJ80rYUR1kmA

async function show(){
    let q = document.querySelector('#name').value;
    try{
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyB7-XEfjMbzB0g3UDHDG6XnJ80rYUR1kmA&maxResults=10`);
        res = await res.json();
        let video_div = document.querySelector('#videos');
        console.log(res)

        let {items} = res;

        items.forEach(({id:{videoId}}) =>{
            if(videoId !== undefined){
                let iframe = document.createElement('iframe');
                let div = document.createElement('div');
                iframe.width ='250px';
                iframe.height = '300px';
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.allow = 'autoplay; accelerometer; gyroscope; encrypted-media;clipboard-write; picture-in-picture; web-share';
                
                iframe.allowFullscreen = 'allowFullscreen';
                
                let h1 = document.createElement('h1');
                h1.innerHTML = '#Full Screen';
                div.append(iframe,h1);
                video_div.append(div);
                h1.setAttribute('class','heading')
                h1.addEventListener('click', ()=>{
                        fun(iframe,div);
                });
            }
        })
    
    }
    catch(err){
        console.log(err);
    }
   
}


function fun(f,d){
    let video_div = document.querySelector('#videos');
    let main = document.querySelector('#main');

    video_div.append(d);
        main.innerHTML = null;
    
    f.width = '700px'
    f.height = '450px'
    main.append(f);
    d.innerHTML = null;
}

let language = JSON.parse(localStorage.getItem('Lang'));

let datalist = document.querySelector('#from');
let to = document.querySelector('#to');

for(let key in language){
    let {name} = language[key];
    let option = document.createElement('option');
    let option2 = document.createElement('option');
    option.value = name;
    option2.value = name;
    datalist.append(option);
    to.append(option2);
}

async function results(){

let q = document.querySelector('#lang').value;
let target = document.querySelector('#To').value;
let source = document.querySelector('#From').value;


for(let key in language){
    let {name} = language[key];
    if(target == name){
		console.log(target)
        target = key;
    }
    if(source == name){
		console.log(source)
        source = key;
    } 
}

const encodedParams = new URLSearchParams();
encodedParams.append("q", `${q}`);
encodedParams.append("target", `${target}`);
encodedParams.append("source", `${source}`);

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '4944037d3emshbeaf2156658145ap173106jsndd02255d38ca',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
    };
	try{
		let res= await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)

		res = await res.json();
		console.log(res)

		let {data:{translations:[{translatedText}]}} = res;
		
		let result = document.querySelector('#result');
		let h1 = document.createElement('h1');
		h1.innerHTML = translatedText;
		result.append(h1);
	}
   catch(err){
	console.log(err);
   }

}


function swap_value(){
	let target = document.querySelector('#To').value;
	let source = document.querySelector('#From').value;

	let [target_,source_] = [source,target];
	document.querySelector('#To').value = target_;
	document.querySelector('#From').value = source_;
}
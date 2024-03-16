let search=
`
<article class="searching">
<section class="loader"></section>
searching</article>`

let result;

let response;
let show=document.querySelector(".show");
let main=document.querySelector(".input");
const handleclick=()=>{
     main=document.querySelector(".input").value;
console.log(main)
fetchdata();

}

const fetchdata=async()=>{
const url = `https://pokemon-api3.p.rapidapi.com/pokemon?name=${main}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5fb6fb1b53msh1c0795c4f958bbep12ba6ejsn91d7663bbba6',
		'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com'
	}
};



try {
	show.innerHTML=`${search}`
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	main.value=""
	if(response.ok){
		

		let found=
		`
		<section class="card">
			<section class="name">
			<div>
			${result.forms[0].name}
			</div>
			<div>${result.base_experience}
			</div>
			</section>
			<section class="image">
			<img src=${result.sprites.front_default}>
			</section>
			<section class="type">${result.types[0].type.name} </section>
			<section class="description">weight:${result.weight}   height:${result.height}</section>
			<section class="moves">Some moves of ${result.name} are:
			${result.moves[Math.floor(Math.random()*100)].move.name} ,${result.moves[Math.floor(Math.random()*100)].move.name} ,${result.moves[Math.floor(Math.random()*100)].move.name} ,${result.moves[Math.floor(Math.random()*100)].move.name}</section>
		</section>
		`
		show.innerHTML=`${found}`
	}
	else if(!response.ok){
		show.innerHTML="Pokemon Not"
	}
	
} catch (error) {
	console.error(error);
}
}



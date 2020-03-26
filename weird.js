let url = 'https://kuwarrdua.github.io/JSlab4/weird.json';

function useAsynchronous(url,callback){
	let xhr = new XMLHttpRequest();
 	xhr.open('GET', url);
 	xhr.send();
}

function weirdOffers(jsonObj){
	let weirdDeals = jsonObj.weirdDeals;
	let section = document.querySelector('section');
	for(let i=0; i<weirdDeals.length;i++){
		let article = document.createElement('article');
		let h2 = document.createElement('h2');
		let img = document.createElement('img');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let ul = document.createElement('ul');

		img.setAttribute('src', 'https://kuwarrdua.github.io/JSlab4/images/' + weirdDeals[i].image);
		img.setAttribute('alt',weirdDeals[i].image);
		h2.textContent = weirdDeals[i].name;
		p1.textContent = 'Price '+ weirdDeals[i].price;
		p2.textContent = 'Details '+ weirdDeals[i].details;

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(ul);
		section.appendChild(article);

	}
}
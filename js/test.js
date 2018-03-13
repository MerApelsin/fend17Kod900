//import * as apiModule from './apiModule.js';

getAllThethings();

async function getAllThethings()
{
  let response = await apiModule.getAuctions();
  console.log(response);
  handleData(response);
}

function handleData(apiResponse){
  let myTextTag = document.createElement('p');

			//Texten som skall visas i taggen
	let text = JSON.stringify(apiResponse);

			//Skapa en textnode
	let textNode = document.createTextNode(text);

			//Koppla texten till taggen och lägg ut på sidan
	myTextTag.appendChild(textNode);
	document.body.appendChild(myTextTag);
}

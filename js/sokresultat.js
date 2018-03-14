async function myFunction(){

  let searchResultList = document.getElementById('searchResult');

  let searchValue = document.getElementById('search').value;
  let filter = searchValue.toUpperCase();

  let allNames = await fetchData("http://nackowskis.azurewebsites.net/api/Auktion/900");

  let createPtag = document.createElement('p')

  let leta = allNames.filter(name => name.Titel.toUpperCase().includes(filter));
  console.log(JSON.stringify(leta));

  let textNode = document.createTextNode(JSON.stringify(leta));


  //console.log(textNode);
  createPtag.appendChild(textNode);
  searchResultList.appendChild(createPtag);



}

async function fetchData(url){
    let promise = await fetch(url);
    let data = await promise.json();
    return data;
}

/*myFunction();*/

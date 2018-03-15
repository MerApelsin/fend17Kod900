
let sortForm = document.getElementById("sortForm");
sortForm.addEventListener('click', sortF);
async function sortF(e){ 
  let auctions = await apiModule.getAuctions();
  if(e.target.value=="pris"){
    sorteraEfterPris(auctions);
  }
  else if(e.target.value=="datum"){
    sorteraEfterDatum(auctions);
  }
}
function sorteraEfterPris(auctions){
  auctions.sort((a,b)=>{
    return (a.Utropspris - b.Utropspris)
  });
  getAuctionsId(auctions);
}

function sorteraEfterDatum(auctions){
  alert("datum sortering");
}
function getAuctionsId(auctions){
  let arrId=[];
  for(let i=0; i<auctions.length; i++){
    arrId.push(auctions[i].AuktionID);
  }
  localStorage.setItem('sortPris', JSON.stringify(arrId));
  window.open('sort.html','_self');
}
let sortPris = localStorage.getItem('sortPris');

//console.log(savedAuct);
let paintings1 = JSON.parse(sortPris);
//console.log(paintings);
//localStorage.removeItem("sortPris");
console.log(paintings1);

showSort(paintings1);


function showSort(resultArray)
{
  for(let i = 0; i < paintings1.length; i++){
    console.log(paintings1[i]);
    searchDetail(paintings1[i]);
  }
}
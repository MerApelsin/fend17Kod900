
let savedAuct = localStorage.getItem('aukt');
let auctionObjects = JSON.parse(savedAuct);
localStorage.removeItem('aukt');

let resultDiv = document.getElementById("showResult");
// Ikram form
let sortForm = document.getElementById("sortForm");
sortForm.addEventListener('click', sortF);
// end of Ikram form

showResult(auctionObjects)

function showResult(resultArray)
{
  for(let i = 0; i < resultArray.length; i++){
    drawAuction(resultArray[i],"showResult");
  }
}

//------------- Ikram sort o grejer

function sortF(e)
{
  while (resultDiv.firstChild)
  {
      resultDiv.removeChild(resultDiv.firstChild);
  }

  if(e.target.value=="pris"){
    sorteraEfterPris(auctionObjects);
  }
  else if(e.target.value=="datum"){
    sorteraEfterDatum(auctionObjects);
  }
}

function sorteraEfterPris(auctions){
  auctions.sort((a,b)=>{
    return (a.Utropspris - b.Utropspris)
  });
  for(let a = 0; a < auctions.length; a++)
  {
    drawAuction(auctions[a]);
  }
}

function sorteraEfterDatum(auctions){
  auctions.sort(function(a,b) {
    return new Date(a.SlutDatum).getTime() - new Date(b.SlutDatum).getTime()
  });
  for(let a = 0; a < auctions.length; a++)
  {
    drawAuction(auctions[a]);
  }
}

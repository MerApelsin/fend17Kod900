let thisId = sessionStorage.getItem('id');
auctionDetail(thisId);

async function auctionDetail(id)
{
  let response = await apiModule.getSpecificAuct(id);
  console.log(response);
  handleAuction(response);
}

function handleAuction(auctionResp)
{
  let title = document.getElementById("auctionTitle");
  let beskrivning = document.getElementById("about");
  let datum = document.getElementById("dates");
  let pris = document.getElementById("startPris");
  title.innerHTML = "Titel: " + auctionResp.Titel;
  datum.innerHTML = "Start: " + auctionResp.StartDatum.slice(0,10) + "<br> Avslutas: " + auctionResp.SlutDatum.slice(11,19);
  beskrivning.innerHTML = "Beskrivning: " + auctionResp.Beskrivning;
  pris.innerHTML = "Utropspris: " + auctionResp.Utropspris;
  handleBids(auctionResp.AuktionID);
}

/*
function isAuctionFinished(response)
{
  let budLista = document.getElementById("bidsList");
  let dagensdatum = new Date();
  let auctDate = new Date(response.SlutDatum);
  if(dagensdatum > auctDate)
  {
    let bidList = await apiModule.getBud(response.AuktionID);
    if(bidList.length > 0)
    {
      for(let a = 0; a < bidList.length; a++)
      {
        values.push(bidList[a].Summa);
      }

      let HighestBid = values.reduce(function (p, v) {
        return ( p > v ? p : v );});
      let temp = "Det högsta budet blev: " + HighestBid;
      let theTextNode = document.createTextNode(temp);
      TextTag.appendChild(theTextNode);
      budLista.appendChild(TextTag);
    }
    else
    {
      let TextTag = document.createElement('LI');
      let temp = "Inga bud finns för detta auktions objekt."
      let theTextNode = document.createTextNode(temp);
      TextTag.appendChild(theTextNode);
      budLista.appendChild(TextTag);
    }
  }
  else{ handleBids(response.AuktionID); }

}*/

async function handleBids(id)
{
  let budLista = document.getElementById("bidsList");
  let bidList = await apiModule.getBud(id);


  if(bidList.length > 0)
  {
    for(let i = 0; i < bidList.length;i++)
    {
      let TextTag = document.createElement('LI');
      let temp ="BudID: " + bidList[i].BudID +" Summa: " + bidList[i].Summa;
      let theTextNode = document.createTextNode(temp);
      TextTag.appendChild(theTextNode);
      budLista.appendChild(TextTag);
    }
  }
  else
  {
    let TextTag = document.createElement('LI');
    let temp = "Inga bud finns för detta auktions objekt."
    let theTextNode = document.createTextNode(temp);
    TextTag.appendChild(theTextNode);
    budLista.appendChild(TextTag);
  }

  let bidButton = document.getElementById("bidButton");
  bidButton.addEventListener("click",placeBid);
}



async function placeBid()
{
  let auctionId = thisId;
  let bid = document.getElementById("bidValue").value;
  let bidList = await apiModule.getBud(auctionId);
  let values = [];
  if(bidList.length > 0)
  {
    for(let a = 0; a < bidList.length; a++)
    {
      values.push(bidList[a].Summa);
    }
    console.log(values);
    let currentHighestBid = values.reduce(function (p, v) {
      return ( p > v ? p : v );});
    console.log(currentHighestBid);

    if(bid > currentHighestBid)
    {
      let content = JSON.stringify({BudID: "1", Summa: bid, AuktionsID: auctionId});
      console.log(content);
      apiModule.postBud(content);
      alert("Budet är lagt!");
    }
    else
    {
      alert("Var vänlig och lägg ett bud högre än det nuvarande högsta!");
    }
  }
  else
  {

    let content = JSON.stringify({BudID: "1", Summa: bid, AuktionsID: auctionId});
    console.log(content);
    apiModule.postBud(content);
    alert("Budet är lagt!");
  }
}

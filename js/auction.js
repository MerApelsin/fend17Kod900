let thisId = sessionStorage.getItem('id');
auctionDetail(thisId);
let infoDiv = document.getElementById("infoMsg");
let msgText = document.getElementById("message");;
infoDiv.style.display = "none";

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
  let startDate = document.getElementById("startDate");
  let endDate = document.getElementById("endDate");
  let pris = document.getElementById("startPris");
  title.innerHTML = "Titel: " + auctionResp.Titel;
  startDate.innerHTML = "Start datum: " + auctionResp.StartDatum.slice(0,10) + " Klockan: " + auctionResp.StartDatum.slice(11,19);
  endDate.innerHTML = "Avslutas: " + auctionResp.SlutDatum.slice(0,10) + " Klockan: " + auctionResp.SlutDatum.slice(11,19);
  beskrivning.innerHTML = "Beskrivning: " + auctionResp.Beskrivning;
  pris.innerHTML = "Utropspris: " + auctionResp.Utropspris;
  isAuctionFinished(auctionResp);
}

//Stefans
async function searchDetail(id)
{
  let response = await apiModule.getSpecificAuct(id);
  drawAuction(response);
}

function drawAuction(theAuction)
{
  let container=document.getElementById("showResult");
  let innerContainer = document.createElement("div");
  innerContainer.className="innerContainer";
  innerContainer.id = theAuction.AuktionID;
  innerContainer.onclick = function() { idFromDiv(innerContainer.id); }

  let imgAuction = document.createElement("img");
  imgAuction.setAttribute("src", "image/imageMissing.png");

  let titel = document.createElement("p");
  let titelText = document.createTextNode(theAuction.Titel);
  titel.appendChild(titelText);

  let slutDatum = document.createElement("p");
  let slutDatumText = document.createTextNode(theAuction.SlutDatum);
  slutDatum.appendChild(slutDatumText);

  let pris = document.createElement("p");
  let prisText = document.createTextNode("Utropspris: " + theAuction.Utropspris);
  pris.appendChild(prisText);

  innerContainer.appendChild(imgAuction);
  innerContainer.appendChild(titel);
  innerContainer.appendChild(slutDatum);
  innerContainer.appendChild(pris);
  container.appendChild(innerContainer);
}
//---End of Stefans


async function isAuctionFinished(response)
{
  var bidSection = document.getElementById("bidSection");
  bidSection.style.display = "none";
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

}

async function handleBids(id)
{
  var bidSection = document.getElementById("bidSection");
  bidSection.style.display = "block";
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

  var auctionId = thisId;
  let bid = document.getElementById("bidValue").value;
  let bidList = await apiModule.getBud(auctionId);
  let values = [];
  if(bidList.length > 0 && (bid != 0 || bid == null))
  {
    for(let a = 0; a < bidList.length; a++)
    {
      values.push(bidList[a].Summa);
    }
    let currentHighestBid = values.reduce(function (p, v) {
      return ( p > v ? p : v );});

    if(bid > currentHighestBid)
    {
      sendBid(auctionId, bid)
      infoDiv.style.display = "block";
      msgText.innerHTML = "Budet har lagts!"
      refreshBids(auctionId);
    }
    else
    {
      infoDiv.style.display = "block";
      msgText.innerHTML = "Var vänlig och lägg ett bud högre än det nuvarande högsta!";
    }
  }
  else if (bid != 0 || bid == null)
  {
    sendBid(auctionId, bid)
    infoDiv.style.display = "block";
    msgText.innerHTML = "Budet har lagts!"
    refreshBids(auctionId);
  }
}

async function refreshBids(auctionId)
{
  let budLista = document.getElementById("bidsList");
  let bidList = await apiModule.getBud(auctionId);
  let TextTag = document.createElement('LI');
  let latestBid ="BudID: " + bidList[bidList.length-1].BudID +" Summa: " + bidList[bidList.length-1].Summa;
  let theTextNode = document.createTextNode(latestBid);
  TextTag.appendChild(theTextNode);
  budLista.appendChild(TextTag);
}

function sendBid(id,amount)
{
  var url = "http://nackowskis.azurewebsites.net/api/Bud/900/" + id;
  var bid = {"BudID": 1, "Summa": amount, "AuktionID": id};
  apiModule.postBud(url,bid);
}

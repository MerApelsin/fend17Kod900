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
  title.innerHTML = "Titel: " + auctionResp.Titel;
  beskrivning.innerHTML = "Beskrivning: " + auctionResp.Beskrivning;
}

async function handleBids(id)
{
  let budLista = document.getElementById("bidsList");
  let bidList = await apiModule.getBud(id);

  /*
  var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);
  */
  for(let i = 0; i < bidList.length;i++)
  {
    let TextTag = document.createElement('li');
    let temp ="BudID: " + bidList[i].BudID +" Summa: " + bidList[i].Summa;
    let theTextNode = document.createTextNode(temp);
    TextTag.appendChild(theTextNode);
    budLista.appendChild(TextTag);
  }

  let bidButton = document.getElementById("bidButton");
  bidButton.addEventListener("click",placeBid)
}

function placeBid()
{
  let bid = document.getElementById("bidValue").value;
  let theDiv = document.getElementById("auction");
  let myTextTag = document.createElement('p');
  let textNode = document.createTextNode(bid);
  myTextTag.appendChild(textNode);
  theDiv.appendChild(myTextTag);
}

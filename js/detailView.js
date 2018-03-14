//getAuctionId();

//window.open('page.html', '_self');
/*
//set
localStorage.setItem('myObject', JSON.stringify(myObject));

//get
var myObject = JSON.parse(localStorage.getItem('myObject'));
*/
function getAuctionId()
{
    document.getElementById("hej").addEventListener("click",meep);
    let x = document.querySelectorAll(".innerContainer");
    console.log(x);
    let divchildren = document.getElementById("ikram").children;
    console.log(divchildren);
    let test = document.getElementsByTagName('div');
    console.log(test);
}

function idFromDiv(id)
{
  if(isOnlyDigits(id) == true)
  {
    let useId = parseInt(id);
    sessionStorage.setItem('id', useId);
    window.open('auction.html','_self');
    //auctionDetail(useId)
  }
}

function isOnlyDigits(value) {
    return /^-{0,1}\d+$/.test(value);
}

function meep(){ alert("clicked P");}

/*
async function auctionDetail(id)
{
  let response = await apiModule.getSpecificAuct(id);
  console.log(response);
  handleAuction(response);
}

function handleAuction(auctionResp)
{
  let theDiv = document.getElementById("cecilia");
  let myTextTag = document.createElement('p');

  let text = auctionResp.Titel + " Beskrivning: "+auctionResp.Beskrivning;
	let textNode = document.createTextNode(text);

	myTextTag.appendChild(textNode);
	theDiv.appendChild(myTextTag);
}

async function handleBids(id)
{
  let theDiv = document.getElementById("cecilia");
  let bidList = await apiModule.getBud(id);
  for(let i = 0; i < bidList.length;i++)
  {
    let TextTag = document.createElement('p');
    let temp ="BudID: " + bidList[i].BudID +" Summa: " + bidList[i].Summa;
    let theTextNode = document.createTextNode(temp);
    TextTag.appendChild(theTextNode);
    theDiv.appendChild(TextTag);
  }

  let bidButton = document.getElementById("bidButton");
  bidButton.addEventListener("click",placeBid)
}

function placeBid()
{
  let bid = document.getElementById("bidValue").value;
  let theDiv = document.getElementById("cecilia");
  let myTextTag = document.createElement('p');
  let textNode = document.createTextNode(bid);
  myTextTag.appendChild(textNode);
  theDiv.appendChild(myTextTag);
}*/

getAuctionId();

/*
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}​
*/

function getAuctionId()
{
  let test = document.getElementsByTagName('div');
  let aucArray = Array.from(test);
  var arr = Array.prototype.slice.call( test );

  console.log(test);
  console.log(test.length);
  console.log(arr);
  //vill loopa igenom denna och sätta onclick func på varje
  //console.log(test[0].id);

  document.getElementById("hej").addEventListener("click",meep);
  //auctionDetail(9);

  for(let a = 0; a < test.length; a++)
  {
    console.log("in for loop - divs");
    console.log(test[a]);
    test[a].onclick = function() { idFromDiv(test[a]); };
  }
}

function idFromDiv(div)
{
  if(isOnlyDigits(div.id) == true)
  {
    let useId = parseInt(div.id);
    auctionDetail(useId);
  }
}

function isOnlyDigits(value) {
    return /^-{0,1}\d+$/.test(value);
}

function meep(){ alert("clicked P");}

async function auctionDetail(id)
{
  let response = await apiModule.getSpecificAuct(id);
  handleAuction(response);
}

function handleAuction(auctionResp)
{
  let theDiv = document.getElementById("cecilia");
  let myTextTag = document.createElement('p');

			//Texten som skall visas i taggen
  console.log(auctionResp);
	//let text = JSON.stringify(auctionResp);
  let text = auctionResp.Titel + " Beskrivning: "+auctionResp.Beskrivning;
	let textNode = document.createTextNode(text);

			//Koppla texten till taggen och lägg ut på sidan
	myTextTag.appendChild(textNode);
	theDiv.appendChild(myTextTag);
  handleBids(auctionResp.AuktionID);
}

async function handleBids(id)
{
  let theDiv = document.getElementById("cecilia");
  let bidList = await apiModule.getBud(id);
  for(let i = 0; i < bidList.length;i++)
  {
    let myTextTag = document.createElement('p');
    let text ="BudID: " + bidList[i].BudID +" Summa: " + bidList[i].Summa;
    let textNode = document.createTextNode(text);
    myTextTag.appendChild(textNode);
    theDiv.appendChild(myTextTag);
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
}

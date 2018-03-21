getAll();
let container=document.getElementById("ikram");
async function getAll()
{
  let response = await apiModule.getAuctions();
  console.log(response);

    ShowAutions(response);
}

function ShowAutions(response) {
   
    for (let i = 0; i < response.length; i++) {
        if(new Date(response[i].SlutDatum) > new Date()){                    
        let innerContainer = document.createElement("div");
        innerContainer.className="innerContainer";
        innerContainer.id = response[i].AuktionID;
        innerContainer.onclick = function() { idFromDiv(innerContainer.id); }
        
        let imgAuction = getImg();
        let titel = getTitel(response, i);
        let slutDatum = getSlutDatum(response, i);
        let pris = getPris(response , i);
        innerContainer.appendChild(imgAuction);
        innerContainer.appendChild(titel);
        innerContainer.appendChild(slutDatum);
        innerContainer.appendChild(pris);
        container.appendChild(innerContainer);
        }
    }
}
let testEvent=document.getElementsByClassName("innerContainer");
function hide(event){
    
    alert(event.ta);
  }
  
 

function getImg() {
    let imgAuction = document.createElement("img");
    imgAuction.setAttribute("src", "image/imageMissing.png");
    return imgAuction;
}

function getTitel(response, i) {
    let titel = document.createElement("p");
    let titelText = document.createTextNode(response[i].Titel);
    titel.appendChild(titelText);
    return titel;
}
function getSlutDatum(response, i) {
    let slutDatum = document.createElement("p");
    let slutDatumText = document.createTextNode("Avslutas: " + response[i].SlutDatum.slice(0,10) + " Klockan: " + response[i].SlutDatum.slice(11,19));
    slutDatum.appendChild(slutDatumText);
    return slutDatum;
}
function getPris(response, i) {
    let pris = document.createElement("p");
    let prisText = document.createTextNode("Utropspris: " + response[i].Utropspris);
    pris.appendChild(prisText);
    return pris;
}


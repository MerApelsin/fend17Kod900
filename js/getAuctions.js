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
        let innerContainer = document.createElement("div");
        innerContainer.id = response[i].AuktionID;
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
    let slutDatumText = document.createTextNode(response[i].SlutDatum);
    slutDatum.appendChild(slutDatumText);
    return slutDatum;
}
function getPris(response, i) {
    let pris = document.createElement("p");
    let prisText = document.createTextNode("Utropspris: " + response[i].Utropspris);
    pris.appendChild(prisText);
    return pris;
}


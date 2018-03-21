async function myFunction(){


let allNames = await apiModule.getAuctions();
//console.log(allNames);
let arr = [];
let searchValue = document.getElementById('search').value;
//console.log(searchValue);

for(let i = 0; i < allNames.length; i++){
  let tempString = allNames[i].Titel;
   if(tempString.toUpperCase().includes(searchValue.toUpperCase()))
<<<<<<< HEAD
    {
=======
   {
>>>>>>> Search_and_result
    //  console.log(allNames[i].AuktionID);
      let tempAukt = createAuctionObj(allNames[i]);
      arr.push(tempAukt);
    }
    console.log(arr);
    localStorage.setItem('aukt', JSON.stringify(arr));
    window.open('result.html','_self');
}

function createAuctionObj(aukt)
{
  var thisAuktion = {AuktionID: aukt.AuktionID, Titel: aukt.Titel, Beskrivning: aukt.Beskrivning,
    StartDatum: aukt.StartDatum, SlutDatum: aukt.SlutDatum,
    Gruppkod: aukt.Gruppkod, Utropspris: aukt.Utropspris}
    return thisAuktion;
}









/*

  let searchResultList = document.getElementById('searchResult');

  let searchValue = document.getElementById('search').value;
  let filter = searchValue.toUpperCase();

  let allNames = apiModule.getAuctions();

  let createPtag = document.createElement('p')

  let leta = allNames.filter(name => name.Titel.toUpperCase().includes(filter));

  let textNode = document.createTextNode(JSON.stringify(leta));


  //console.log(textNode);
  createPtag.appendChild(textNode);
  searchResultList.appendChild(createPtag);
    console.log(leta[0].AuktionID)

    let v = leta[0].AuktionID
    sessionStorage.setItem('leta', v);
    window.open('result.html','_self');
    let x = sessionStorage.getItem('leta');
    auctionDetail(x);
    /*let showResult = document.getElementById('showResult');
    let cl= container.cloneNode(true);
    showResult.appendChild(cl);*/


}



/*myFunction();*/

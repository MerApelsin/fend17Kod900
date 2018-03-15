
let savedAuct = localStorage.getItem('aukt');
//console.log(savedAuct);
let paintings = JSON.parse(savedAuct);
//console.log(paintings);

showResult(paintings);

function showResult(resultArray)
{
  for(let i = 0; i < resultArray.length; i++){
      searchDetail(resultArray[i]);
  }
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
  for(let i = 0; i < resultArray.length; i++){
    console.log(resultArray[i]);
    searchDetail(resultArray[i]);
  }
}
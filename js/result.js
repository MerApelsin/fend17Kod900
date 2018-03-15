
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


function idFromDiv(id)
{
  if(isOnlyDigits(id) == true)
  {
    let useId = parseInt(id);
    sessionStorage.setItem('id', useId);
    window.open('auction.html','_self');
  }
}

function isOnlyDigits(value) {
    return /^-{0,1}\d+$/.test(value);
}

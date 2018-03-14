/*  async function getAuctions()
  {
    let response = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/900');
    //console.log(response);
    return response;
  }

  async function getBud(id)
  {
    let response = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/900/'+id);
    return response;
  }

  async function fetchData(url)
  		{
  			let promise = await fetch(url);
  			let data = await promise.json();
  			return data;
  		}

  async function postBud(id,price,budid)
  {
    fetch('http://nackowskis.azurewebsites.net/api/Bud/900/'+id, {
  	method: 'post',
  	body: JSON.stringify({
      BudID: budid,
      Summa: price,
      AuktionsID: id
  	})
  });
  }

  export {getAuctions,getBud,postBud};
*/

var apiModule = (function()
{
  async function getAuctions()
  {
    let response = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/900');
    //console.log(response);
    return response;
  }

  async function getSpecificAuct(id)
  {
    let response = await fetchData('http://nackowskis.azurewebsites.net/api/Auktion/900/'+id);
    //console.log(response);
    return response;
  }

  async function getBud(id)
  {
    let response = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/900/'+id);
    return response;
  }

  async function fetchData(url)
  		{
  			let promise = await fetch(url);
  			let data = await promise.json();
  			return data;
  		}

  function postBud(content)
  {
    fetch('http://nackowskis.azurewebsites.net/api/bud/',
    {
      method: 'post',
      body: JSON.stringify(content),
      headers:
      {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }

    })
    /*
    fetch('http://nackowskis.azurewebsites.net/api/Bud/900/'+id, {
  	method: 'post',
  	body: JSON.stringify({
      BudID: budid,
      Summa: price,
      AuktionsID: id
  	})
  });*/
  }

  return {getAuctions:getAuctions,getSpecificAuct:getSpecificAuct,getBud:getBud,postBud:postBud};
})();

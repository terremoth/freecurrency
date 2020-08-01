// YES, this is a SYNCHRONOUS alternative, and took +- 2ms to 10ms to load, so, don't worry about affect user experience 
function getCurrency(base = 'USD', symbol = 'EUR') {

  let freeCurrencyUrlList = [
    `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`,
    `https://api.ratesapi.io/api/latest?base=${base}&symbols=${symbol}`,
    `https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`
  ];

  let request = new XMLHttpRequest();
  var response = null;

  freeCurrencyUrlList.some((url) => {
    try {
      request.open('GET', url, false);
      request.send();
      if (request.status === 200) {
        response = JSON.parse(request.responseText).rates[symbol];
        return true;
      }  
      return false;
    } catch (e) {
      return false;
    }

  });

  return response;
}

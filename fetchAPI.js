async function getData() {
  let apiURL = document.querySelector("input[name='fetch__api']").value
  try{
    const apiData  = await fetch(`${apiURL}`)
    return apiData.json()
  } catch (error) {
    console.error(error);
    alert(`Has something wrong with the api url... error: ${error}`)
  }
}
async function fetchAPI() {
 let apiData = await getData();
 console.log(JSON.stringify(apiData))
 document.querySelector("div[name='api__data'").innerHTML = JSON.stringify(apiData);
}

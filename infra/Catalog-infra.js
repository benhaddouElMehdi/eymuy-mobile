
export function catalog(id) {
  console.log("call get catalog ........ for : " + id)
  return fetch('https://catalogue-ms.herokuapp.com/catalogue-ms/public/v1/restaurant/'+id+'/catalogue/current')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

const ENDPOINT = 'https://randomuser.me/api/?results=50';

const getPeople = ()=> {
  return fetch (ENDPOINT)
  .then(response=> response.json())
}
export {getPeople};
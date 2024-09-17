const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString)

const user = urlParams.get('user')

console.log(`user ${user}`)
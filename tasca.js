fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  
  .then((json) => json
  .filter((user) => user.id < 6)
  .map((user) => user.name)
  .sort((a, b) => a > b ? 1 : -1))
  
  .then((json) => console.log(json));
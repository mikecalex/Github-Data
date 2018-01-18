let data = require('./data');

console.log("LaunchAcademy owns " + data.length + " repositories")

console.log("==================")

let maxSize = 0;
let name = null;
data.forEach((sizes) => {
  if(sizes.size > maxSize) {
    maxSize = (sizes.size);
    name = (sizes.name);
  }
})

console.log(`${name} has the largest repository size: ${maxSize}`)

console.log("==================")

let dates = [];
let firstName = [];
data.forEach(repo => {
  dates.push(repo.created_at)
})

!dates.sort()
firstDate = dates[0]

data.forEach(names => {
  if(firstDate === names.created_at) {
    firstName.push(names.name)
  }
})

console.log(`${firstName} was created first: ${firstDate}`)

console.log("==================")

let descriptions = data.map(descrip => {
  return descrip.description
})

console.log(descriptions)

console.log("==================")

let summary = data.map(info => {
  return "Repo name is " + info.name + ", " + info.watchers_count + " watchers, owner is " + info.owner.login 
})

console.log(summary)

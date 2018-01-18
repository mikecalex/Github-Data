let data = require('./data');

// Question #1
console.log("Launch Academy has " + data.length + " repositories");

console.log('-----------------');
// Question #2
let maxSize = 0;
let names = null;
data.forEach((sizes) => {
  if(sizes.size > maxSize) {
    maxSize = (sizes.size);
    names = (sizes.name) ;
  }
});

console.log(`${names} has the largest size: ${maxSize}`);

console.log('-----------------');

// Question #3
let maxNum = 0;
let name = null;
data.forEach((watch) => {
  if(watch.watchers > maxNum) {
    maxNum = (watch.watchers);
    name = (watch.name) ;
  }
});

console.log(`${name} has the most watchers: ${maxNum}`);

console.log('-----------------');


let newest = data.map(function(e) { return e.created_at; }).sort().reverse()[0];
most_recent = newest;

let findMostRecent = (names) => {
  let nameIndex = 0;
  data.forEach((date) => {
    if(date.created_at.includes(names)) {
      nameIndex = data.indexOf(date);

    }
  });
  return data[nameIndex].name;
};

console.log((findMostRecent(most_recent) + " was the most recently created repository: " + `${most_recent}`));

console.log('-----------------');

let oldest = data.map(function(e) { return e.created_at; }).sort()[0];
oldestRepository = oldest;

let findOldest = (names) => {
  let nameIndex = 0;
  data.forEach((date) => {
    if(date.created_at.includes(names)) {
      nameIndex = data.indexOf(date);
    }
  });
  return data[nameIndex].name;
};

console.log((findOldest(oldestRepository) + " is the oldest repository: " + `${oldestRepository}`));


console.log('-----------------');

data.forEach((tags) => {
  console.log(`${tags.name}: ${tags.description}`);
});

console.log('-----------------');

const pluck = (arr, key)=> {
  return arr.map(item => item[key]);
};

const stooges = [
  {name: 'moe', age: 40},
  {name: 'larry', age: 50},
  {name: 'curly', age: 60}
];

console.log(pluck(stooges, 'name'));//[ 'moe', 'larry', 'curly' ]
console.log(pluck(stooges, 'age'));//[ 'moe', 'larry', 'curly' ]

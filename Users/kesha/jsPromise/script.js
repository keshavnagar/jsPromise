const ranNumGenDef = () => 
  Math.floor(Math.random() * 10) + 1;
let p1 = new Promise((resolve, reject) => {
  // let x = 90;

  // // resolve(x); // calling by .then and x assign to .then()'s argument
  // // reject(x)

  const ranNumGen = ranNumGenDef();
  setTimeout(resolve, 4000, ranNumGen);
});

p1.then((x) => {
  console.log(x);
  return x * 2;
})
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(`${x} caught`);
  });

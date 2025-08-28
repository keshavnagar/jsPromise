let p1 = new Promise((resolve, reject) => {
  let x = 90;

 resolve(x); // calling by .then and x assign to .then()'s argument

});

p1.then((x) => console.log(`${x} : this is our resolve passed value`))


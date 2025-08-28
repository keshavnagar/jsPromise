let p1 = new Promise((resolve, reject) => {
  let x = 90;
  if(x==1)
 resolve(x); // calling by .then and x assign to .then()'s argument
else
reject(x);
});

p1.then((x) => console.log(`${x} : this is our resolve passed value`))
.catch((x)=>console.log(`${x}`))

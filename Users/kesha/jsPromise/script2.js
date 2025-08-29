let p1 = new Promise((resolve, reject) => {
  let x = 100;
  if (x == 100) resolve(" p1 is resolved");
  else reject(" p1 is rejected");
});

let p2 = Promise.resolve(" p2 is resolved");
let p3 = () => Promise.resolve(null);
let p4 = () => Promise.reject(`p4 is rejected`)

p1.then((result)=>{
    console.log(`p1 : ${result}`);
})

p2.then((result)=>{
    console.log(`p2 : ${result}`);
})

p3().then((result)=>{
    console.log(`p3 : ${result}`);
})

p4().catch((failed) => console.log(`p4: ${failed}`))

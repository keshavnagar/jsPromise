console.log("==== Programm start====");
let asyncTask = new Promise((resolve, reject) => {
  let success = true;
  if (success)
    resolve(
      setTimeout(() => {
        console.log("successufull " + "after " + 4 + " seconds");
      }, 4000)
    );
  else
    reject(
      setTimeout(() => {
        console.log("unsuccessful " + "after " + 6 + " second");
      }, 6000)
    );
});

asyncTask
  .then((message) => {
    console.log( message);
  })
  .catch((message) => {
    console.log( message);
  });
console.log("==== Programm end====");

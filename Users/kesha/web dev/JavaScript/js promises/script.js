console.log("==== Programm start====");
let asyncTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (success) resolve("successufull " + "after " + 4 + " seconds");
    else reject("unsuccessful " + "after " + 4 + " second");
  }, 4000);
});

asyncTask
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
console.log("==== Programm end====");

console.log("=== Program start ===");

// syncronous function
function greet(name) {
  console.log("hello " + name);
}

// asyncronous function
function delayedGreet(name, delay) {
  setTimeout(() => {
    console.log("hello " + name + " after " + delay / 1000 + " second");
  }, delay);
}

//execution
greet("keshav"); //syncronous
delayedGreet("keshav", 4000); // asyncronous
greet("ajay"); // syncronous
delayedGreet("ajay", 2000); // asyncronous

console.log("=== program end ===");

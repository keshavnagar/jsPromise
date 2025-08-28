// now we implement the promises

let promiseExample = new Promise((resolve,reject)=>{
  let success = false;
  if(success)
    resolve("work successfully done")
  else
    reject("work failed")
}

)

promiseExample.then((message)=>{
  console.log("success: "+message)
})

.catch((error)=>{
  console.log("error: "+error)
}
)
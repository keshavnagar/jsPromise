function getData(dataId){//suppose it recieve the data after 2s, than we use setTimeOut
  setTimeout(() => {
     console.log("data: "+dataId)
  }, 2000);
 
}

getData(789432)
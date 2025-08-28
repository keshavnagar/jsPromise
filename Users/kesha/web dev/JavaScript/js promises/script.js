function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data: " + dataId);
    if (getData) getNextData();
  }, 2000);
}

getData(789432, () => {
  return getData(479328);
});

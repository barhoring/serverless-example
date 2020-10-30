const axios = require("axios");
const utils = require("./utils");

const doWork = async () => {
  const startTime = Date.now();
  const array = Array(100).fill(0);

  const requests = array.map((value, index) => {
    return utils.getName();
  });

  const tmp = await axios.all(requests).then((responses) => {
    const obj = utils.countNames(responses);
    const arr = utils.objToArray(obj);
    const mostCommonNames = utils.getTopTen(arr);
    const endTime = Date.now();
    console.log("Program running time ", (endTime - startTime) / 1000);
    return mostCommonNames;
  });

  return tmp;
};

exports.doWork = doWork;

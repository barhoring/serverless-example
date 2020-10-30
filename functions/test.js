const main = require("../main");

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  const result = await main.doWork();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

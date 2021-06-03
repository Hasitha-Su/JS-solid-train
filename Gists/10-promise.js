//promises

const http = require("http");

function get_my_ipaddress() {
  //promise is returned
  return new Promise((resolve, reject) => {
    // get ip address
    http.get("http://api.ipify.org", (response) => {
      let responseData = "";
      response.on("data", (data) => (responseData = responseData + data));
      response.on("end", () => resolve(responseData));
      response.on("error", reject);
    });
  });
}

//using Promises

get_my_ipaddress("http://api.ipify.org")
  //if request is complete
  .then((data) => console.log("with chained promises:", data))
  // if there is an error
  .catch((error) => console.log(error))
  // whether its error or success, this will be executed
  // simlar to java try catch
  .finally(() => console.log("Finished"));

//does not wait untill the result comes
//so the responseData.length will be undefined
function print_ipaddress() {
  let responseData = "";
  responseData = get_my_ipaddress("http://api.ipify.org");
  console.log("without chained promises:" + responseData.data);
}

print_ipaddress();

// so lets make some changes to our code
async function print_ipaddress2() {
  let responseData = "";
  //this will pause untill a result is received since await is used
  responseData = await get_my_ipaddress("http://api.ipify.org");
  console.log("with async await:" + responseData);
}

print_ipaddress2();



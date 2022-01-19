const axios = require('axios');


const promiseOfResponse = axios.get('http://nemzetisport.hu');
console.log(promiseOfResponse);



const responseHandler = (resolvedPromise) => {
  console.log("fut");
  let response = resolvedPromise;
  console.log(response.status);
  const status = response.status;
  workWithStatus(status);
}

promiseOfResponse.then(responseHandler);


/* setTimeout(function() {
  console.log(status);
}, 1000); */

const workWithStatus = (status) => {
  console.log(status);
}

const run = async () => {
  const resp = await axios.get('http://nemzetisport.hu');
  console.log(`run function: ${resp.status}`);
}

run();




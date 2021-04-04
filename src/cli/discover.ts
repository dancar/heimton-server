const APIDiscovery  = require('soundtouch-api').APIDiscovery;
const API = require('soundtouch-api').API;

async function run() {
  const apis = await APIDiscovery.search() as Array<typeof API>;
  // console.log(JSON.stringify(apis, undefined, 2));
  const allInfos = await Promise.all(apis.map(api => api.getInfo()));
  console.log(JSON.stringify(allInfos, undefined, 2));

}

run();

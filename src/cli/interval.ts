import { Member, API, ContentItem } from 'soundtouch-api';
import { readFileSync } from 'fs';
// const APIDiscovery  = require('soundtouch-api').APIDiscovery;
// const API = require('soundtouch-api').API;

type Configuration = {
  master: Member;
  minions: Array<Member>;
}

const confData = readFileSync('./conf.json', 'utf8');
const HEIM_CONF: Configuration = JSON.parse(confData);

async function run() {
  const groupMaster = await createGroupAndMaster(HEIM_CONF);
  setSourceToAuxIfNecessary(groupMaster);
  showInfo(groupMaster);
}

async function createGroupAndMaster(conf: Configuration): Promise<API> {
  const masterConf = conf.master;
  const minionsConf = conf.minions;
  const master = new API(masterConf.ipAddress);
  const groupData = await master.setZone({
    master: masterConf.deviceId,
    members: minionsConf
  });
  /* DANDEBUG */ ( () => {const DAN_EXPRESSION = [groupData]; console.table({file: 'index.ts', line: 38, expression: 'res', values: DAN_EXPRESSION}); console.log(...DAN_EXPRESSION);})();
  return master;
}

async function showInfo(target: API) {
  const info = await target.getNowPlaying();
  /* DANDEBUG */ ( () => {const DAN_EXPRESSION = [info]; console.table({file: 'index.ts', line: 52, expression: 'info', values: DAN_EXPRESSION}); console.log(...DAN_EXPRESSION);})();
}

async function setSourceToAuxIfNecessary(target: API): Promise<void> {
  const nowPlayingData = await target.getNowPlaying();
  const isAux = nowPlayingData?.source === 'AUX';
  const isPlaying = nowPlayingData?.playStatus === 'PLAY_STATE';

  const auxAlreadySetAndPlaying = isAux && isPlaying;
  if (auxAlreadySetAndPlaying) {
    return;
  }

  const contentItem: ContentItem = {
    source: 'AUX',
    sourceAccount: 'AUX',
  }
  await target.selectSource(contentItem);
}


run();

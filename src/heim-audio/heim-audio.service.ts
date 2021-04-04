import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

// Command to set volume for Raspberry Pi 4 headphone jack
const VOLUME_COMMAND_PREFIX = "amixer -c 1 set Headphone "; // https://askubuntu.com/questions/77522/command-to-unmute-and-maximize-volume

@Injectable()
export class HeimAudioService {

  private _setVolume(percentage: number) {
    const percentageStr = percentage + '%';
    console.debug(`setting volume to ${percentageStr}...`);
    const cmd = VOLUME_COMMAND_PREFIX + percentageStr;
    exec(cmd);
  }

  mute() {
    this._setVolume(0);
  }

  maxVolume() {
    this._setVolume(100);
  }
}

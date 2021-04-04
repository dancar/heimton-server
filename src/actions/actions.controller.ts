import { Controller, Get } from '@nestjs/common';
import { HeimAudioService } from 'src/heim-audio/heim-audio.service';

@Controller('actions')
export class ActionsController {
  constructor (
    public _audioService: HeimAudioService,
  ){

  }

  // MUTE
  @Get('action1')
  action1() {
    this._audioService.mute();
    return "OKIdaY";
  }

  // MAX-VOLUME
  @Get('action2')
  action2() {
    this._audioService.maxVolume();
    return "alright";
  }

}

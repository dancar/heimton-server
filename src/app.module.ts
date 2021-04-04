import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsController } from './actions/actions.controller';
import { HeimAudioService } from './heim-audio/heim-audio.service';

@Module({
  imports: [],
  controllers: [AppController, ActionsController],
  providers: [AppService, HeimAudioService],
})
export class AppModule {}

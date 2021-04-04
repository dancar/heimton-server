import { Test, TestingModule } from '@nestjs/testing';
import { HeimAudioService } from './heim-audio.service';

describe('HeimAudioService', () => {
  let service: HeimAudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeimAudioService],
    }).compile();

    service = module.get<HeimAudioService>(HeimAudioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

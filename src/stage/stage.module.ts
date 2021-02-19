import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StageSchema } from './schemas/stage.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'stage', schema: StageSchema }]), ],
  controllers: [StageController],
  providers: [StageService, ],

})
export class StageModule {      
}

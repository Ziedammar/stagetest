import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StageModule } from './stage/stage.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/',
    ),
    
    
  
  ],
  controllers: [],
  providers: [StageModule],
  
})
export class AppModule {}

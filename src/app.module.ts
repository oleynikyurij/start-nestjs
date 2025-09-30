import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { ExampleModule } from './example/example.module';

@Module({
  // для доступа к переменным окружения - ConfigModule.forRoot()
  imports: [ConfigModule.forRoot(), TaskModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

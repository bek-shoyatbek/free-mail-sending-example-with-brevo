import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [MailerController],
  providers: [MailerService, ConfigService],
})
export class MailerModule { }

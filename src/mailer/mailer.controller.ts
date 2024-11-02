import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendMailDto } from './dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Message sent: {messageId}' })
  @ApiBody({ type: SendMailDto })
  async sendMail(@Body() sendMailDto: SendMailDto) {
    return await this.mailerService.sendMail(sendMailDto);
  }
}

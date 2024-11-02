import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import { SendMailDto } from './dto';

@Injectable()
export class MailerService {
    private readonly transport: ReturnType<typeof createTransport>;

    constructor(private readonly configService: ConfigService) {

        this.transport = createTransport({
            host: this.configService.get('BREVO_SMTP_SERVER'),
            port: this.configService.get('SMTP_PORT'),
            secure: false,
            auth: {
                user: this.configService.get('BREVO_LOGIN'),
                pass: this.configService.get('BREVO_SMTP_KEY')
            }
        });
    }

    async sendMail(sendMailDto: SendMailDto) {
        try {
            const responseInfo = await this.transport.sendMail({
                from: this.configService.get<string>("MAIL_FROM"),
                to: sendMailDto.to,
                subject: sendMailDto.subject,
                text: sendMailDto.text
            });
            return `Message sent: ${responseInfo.messageId}`;
        } catch (error) {
            console.log(error);
        }
    }
}

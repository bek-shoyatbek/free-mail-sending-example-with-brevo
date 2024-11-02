import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SendMailDto {
    @ApiProperty({ type: String })
    @IsEmail()
    @IsNotEmpty()
    to: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    subject: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    text: string;
}
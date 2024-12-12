import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'wjtrucido@gmail.com' })
  email: string;
  @ApiProperty({ example: 'test11' })
  password: string;
}

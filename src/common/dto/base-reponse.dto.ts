import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto<T> {
  @ApiProperty({
    example: 200,
  })
  public statusCode: number;

  @ApiProperty({
    example: true,
  })
  public status: boolean;

  @ApiProperty({
    example: 'success',
  })
  public message: string;

  @ApiProperty()
  public data: T;

  constructor(data: any) {
    this.statusCode = data.statusCode;
    this.status = data.status;
    this.message = data.message;
    this.data = data.data;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { UserRole } from './role.enum';
import { BaseModel } from '../../base-model/entities/base-model.entity';

@Entity()
export class User extends BaseModel {
  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'Imam' })
  name: string;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'Al Arisyi' })
  nik: string;

  @Column({
    type: 'varchar',
    length: 250,
    unique: true,
  })
  @ApiProperty({ example: 'alarisyi@gmail.com' })
  email: string;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'samplepassword123' })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.OPERATOR,
  })
  @ApiProperty({ example: 'SUPERADMIN' })
  role: string;

  @Column({ type: 'boolean', nullable: true })
  @ApiProperty({ example: true })
  is_actived: true;
}

// base.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

export abstract class BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /*
   * Create, Update and Delete Date Columns
   */

  @Column({ nullable: true })
  @Exclude()
  public created_by: string;

  @Column({ nullable: true })
  @Exclude()
  public created_by_id: string;

  @Column({ nullable: true })
  @Exclude()
  public updated_by: string;

  @Column({ nullable: true })
  @Exclude()
  public updated_by_id: string;

  @Column({ nullable: true })
  @Exclude()
  public deleted_by: string;

  @Column({ nullable: true })
  @Exclude()
  public deleted_by_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({ example: '2022-07-26T04:54:12.878Z' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({ example: '2022-07-26T04:54:12.878Z' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  public deleted_at: Date;
}

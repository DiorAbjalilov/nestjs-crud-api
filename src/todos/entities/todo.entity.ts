import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Todo {
  @ApiProperty({ description: 'The unique identifier of the todo' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the todo' })
  @Column()
  title: string;

  @ApiProperty({
    description: 'The completion status of the todo',
    default: false,
  })
  @Column({ default: false })
  isDone: boolean;
}

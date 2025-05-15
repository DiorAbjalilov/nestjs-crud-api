import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({ description: 'The title of the todo', required: false })
  title?: string;

  @ApiProperty({
    description: 'The completion status of the todo',
    required: false,
  })
  isDone?: boolean;
}

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBookDto {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  isAvailable?: boolean;
}

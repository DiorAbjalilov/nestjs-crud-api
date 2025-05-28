import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookDto {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field({ defaultValue: true })
  isAvailable?: boolean;
}

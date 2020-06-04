import { InputType, Field } from 'type-graphql'

@InputType()
export class ObjectiveInput {
  @Field()
  title: string

  @Field()
  targetDate: number
}

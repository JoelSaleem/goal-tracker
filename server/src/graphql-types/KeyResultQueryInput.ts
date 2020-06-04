import { InputType, Field } from 'type-graphql'

@InputType()
export class KeyResultQueryInput {
  @Field()
  objectiveId: number
}

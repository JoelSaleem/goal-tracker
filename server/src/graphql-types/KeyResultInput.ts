import { InputType, Field } from 'type-graphql'
// import { Objective } from '../entity/Objective'

@InputType()
export class KeyResultInput {
  @Field()
  title: string

  @Field()
  targetDate: number

  @Field()
  total: number

  @Field()
  objectiveId: number
}

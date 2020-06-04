import { ObjectType, Field } from 'type-graphql'
import { FieldError } from './FieldError'
import { Objective } from '../entity/Objective'

@ObjectType()
export class ObjectiveResponse {
  @Field(() => Objective, { nullable: true })
  objective?: Objective

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]
}

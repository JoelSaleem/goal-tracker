import { ObjectType, Field } from 'type-graphql'
import { FieldError } from './FieldError'
import { KeyResult } from '../entity/KeyResult'

@ObjectType()
export class KeyResultResponse {
  @Field(() => KeyResult, { nullable: true })
  keyResult?: KeyResult

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]
}

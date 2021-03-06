import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import { Objective } from './Objective'
import { KeyResult } from './KeyResult'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column('text', { unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Objective, (objective) => objective.user)
  objectives: Objective[]

  @OneToMany(() => KeyResult, (KeyResult) => KeyResult.user)
  keyResults: KeyResult[]
}

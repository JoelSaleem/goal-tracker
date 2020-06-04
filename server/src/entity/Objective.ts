import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import { KeyResult } from './KeyResult'
import { User } from './User'

@ObjectType()
@Entity()
export class Objective extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column('text')
  title: string

  @Column()
  targetDate: number

  @Column()
  created: number

  @OneToMany(() => KeyResult, (keyResult) => keyResult.objective)
  keyResults: KeyResult[]

  @ManyToOne(() => User, (user) => user.objectives)
  user: number
}

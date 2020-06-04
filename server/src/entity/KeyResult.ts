import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { Objective } from './Objective'
import { Field, ObjectType } from 'type-graphql'
import { User } from './User'

@ObjectType()
@Entity()
export class KeyResult extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column('text')
  title: string

  @ManyToOne(() => Objective, (objective) => objective.keyResults)
  objective: Objective

  @Field()
  @Column()
  targetDate: number

  @Field()
  @Column()
  created: number

  @Field()
  @Column()
  total: number

  @Field()
  @Column()
  progress: number

  @ManyToOne(() => User, (user) => user.keyResults)
  user: User
}

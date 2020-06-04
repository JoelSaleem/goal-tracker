import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { Objective } from './Objective'
import { Field, ObjectType } from 'type-graphql'

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

  @Column()
  targetDate: number

  @Column()
  created: number

  @Column()
  total: number

  @Column()
  progress: number
}

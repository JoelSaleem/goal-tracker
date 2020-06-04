import { Arg, Ctx, Mutation, Resolver, Query } from 'type-graphql'
import { KeyResultInput } from '../graphql-types/KeyResultInput'
import { MyContext } from '../graphql-types/MyContext'
import { KeyResultResponse } from '../graphql-types/KeyResultResponse'
import { KeyResult } from '../entity/KeyResult'
import { KeyResultQueryInput } from '../graphql-types/KeyResultQueryInput'
import { Objective } from '../entity/Objective'

@Resolver()
export class KeyResultsResolver {
  @Mutation(() => KeyResultResponse)
  async createKeyResult(
    @Arg('input')
    { title, targetDate, total, objectiveId }: KeyResultInput,
    @Ctx() ctx: MyContext
  ): Promise<KeyResultResponse> {
    const userId = ctx.req.session?.userId
    if (!userId) {
      return {
        errors: [
          {
            path: 'keyResult',
            message: 'you must be authenticated',
          },
        ],
      }
    }

    const objective = await Objective.findOne({
      id: objectiveId,
      user: userId,
    })

    const keyResult = await KeyResult.create({
      created: Date.now(),
      title,
      total,
      targetDate,
      user: userId,
      objective,
      progress: 0,
    }).save()

    return {
      keyResult,
    }
  }

  @Query(() => [KeyResult])
  async getKeyResultsForObjective(
    @Arg('input')
    { objectiveId }: KeyResultQueryInput,
    @Ctx() ctx: MyContext
  ): Promise<KeyResult[] | undefined> {
    const userId = ctx.req.session?.userId
    if (!userId) {
      return undefined
    }

    const keyResults = await KeyResult.createQueryBuilder('keyResult')
      .where(`keyResult.user = ${userId}`)
      .andWhere(`keyResult.objective = ${objectiveId}`)
      .getMany()

    return keyResults
  }
}

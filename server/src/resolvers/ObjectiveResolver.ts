import { Arg, Ctx, Mutation, Resolver, Query } from 'type-graphql'
import { ObjectiveInput } from '../graphql-types/ObjectiveInput'
import { MyContext } from '../graphql-types/MyContext'
import { ObjectiveResponse } from '../graphql-types/ObjectiveResponse'
import { Objective } from '../entity/Objective'

@Resolver()
export class ObjectiveResolver {
  @Mutation(() => ObjectiveResponse)
  async createObjective(
    @Arg('input')
    { title, targetDate }: ObjectiveInput,
    @Ctx() ctx: MyContext
  ): Promise<ObjectiveResponse> {
    const userId = ctx.req.session?.userId
    if (!userId) {
      return {
        errors: [
          {
            path: 'objective',
            message: 'you must be authenticated',
          },
        ],
      }
    }

    const objective = await Objective.create({
      title,
      created: Date.now(),
      targetDate,
      user: userId,
    }).save()

    return { objective }
  }

  @Query(() => [Objective])
  async listObjectives(
    @Ctx() ctx: MyContext
  ): Promise<Objective[] | undefined> {
    const userId = ctx.req.session?.userId
    if (!userId) {
      return undefined
    }

    const objectives = await Objective.find({ user: userId })

    return objectives
  }
}

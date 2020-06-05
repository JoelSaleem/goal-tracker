import { ExecutionResult } from 'graphql'
import { InMemoryCache } from 'apollo-cache-inmemory'

const updateCacheUser = (cache: InMemoryCache, userId: number | null): void => {
  cache.writeData({
    data: {
      loggedInUser: userId,
    },
  })
}

export const onLogin = async (
  logout: () => Promise<ExecutionResult>,
  persistUser: (options?: object) => void
) => {
  const res = await logout()
  const data = res.data

  const user = data?.login?.user

  persistUser({
    update(cache) {
      updateCacheUser(cache, user?.id)
    },
  })
}

export const onLogout = async (
  logout: () => Promise<ExecutionResult>,
  persistUser: (options?: object) => void
) => {
  const res = await logout()
  const success = res.data
  if (success) {
    persistUser({
      update(cache) {
        updateCacheUser(cache, null)
      },
    })
  }
}

const AUTH_STORAGE_KEY = 'goal_tracker_email'

export const login = async () => {}

export const setUserToStorage = (email: string): void => {
  localStorage.setItem(AUTH_STORAGE_KEY, email)
}

export const getUserFromStorage = (): string | undefined => {
  return localStorage.getItem(AUTH_STORAGE_KEY)
}

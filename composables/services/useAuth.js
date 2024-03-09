import { useSupabaseClient, ref, navigateTo, useToast } from '#imports'

export const useAuth = () => {
  const client = useSupabaseClient()
  const data = ref('')
  const error = ref('')
  const pending = ref(false)
  const toast = useToast()

  const signIn = async ({ email, password }) => {
    try {
      const { error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) throw error

      await navigateTo('/')
    } catch (err) {
      if (err.status === 400) {
        toast.add({
          severity: 'error',
          summary: 'Error Message',
          detail: err.message,
          life: 3000,
        })
      }

      console.log(error)
    }
  }
  const signUp = async ({ email, password }) => {
    try {
      const { error } = await client.auth.signUp({
        email: email,
        password: password,
      })

      if (error) throw error
    } catch (err) {
      if (err.status === 400) {
        error.value = err.message
      }

      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      const { error } = await client.auth.signOut()

      if (error) throw error

      await navigateTo('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  return { signIn, signUp, signOut, data, error, pending }
}

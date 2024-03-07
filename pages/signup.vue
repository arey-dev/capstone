<script setup>
definePageMeta({
  layout: 'auth',
})

const client = useSupabaseClient()

const signUpForm = ref({ email: '', password: '' })

const signUperror = ref('')

const signUp = async () => {
  try {
    const { error } = await client.auth.signUp({
      email: signUpForm.value.email,
      password: signUpForm.value.password,
    })

    if (error) throw error
  } catch (error) {
    if (error.status === 400) {
      signUperror.value = error.message
    }

    // console.log for now the other errors that might error
    console.log(error)
  }
}
</script>

<template>
  <div>
    <NuxtLayout>
      <h1 class="mb-6 text-2xl">Sign Up</h1>

      <form class="mb-6 flex flex-col gap-4" @submit.prevent="signUp">
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="username">Email</label>
          <InputText
            id="username"
            v-model="signUpForm.email"
            aria-describedby="username-help"
          />
        </div>

        <div class="mb-2 flex flex-col gap-1">
          <label class="text-sm" for="password">Password</label>
          <InputText
            id="password"
            v-model="signUpForm.password"
            type="password"
            class="w-full"
            aria-describedby="username-help"
          />
          <small id="password-help"
            >Your password must be atleast 6 characters.</small
          >
        </div>

        <Button type="submit" class="py-2.5" label="Sign Up" />
      </form>

      <NuxtLink class="text-surface-600 mb-1 text-center text-sm underline">
        Forgot your password?
      </NuxtLink>
      <NuxtLink
        to="/login"
        :watch="$route"
        class="text-surface-600 text-center text-sm underline"
        >Already have an account? Login</NuxtLink
      >
    </NuxtLayout>
  </div>
</template>

<script setup></script>

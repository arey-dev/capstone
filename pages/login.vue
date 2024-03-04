<script setup>
definePageMeta({
  layout: 'auth',
})

const client = useSupabaseClient()
const router = useRouter()

const loginForm = ref({
  email: '',
  password: '',
  loginError: '',
})

const signIn = async () => {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: loginForm.value.email,
      password: loginForm.value.password,
    })

    if (error) throw error

    router.push('/')
  } catch (error) {
    if (error.status == 400) {
      loginForm.value.loginError = error.message
    }

    // console.log for now the other errors that might error
    console.log(error)
  }
}
</script>

<template>
  <NuxtLayout>
    <div
      class="flex w-full flex-col rounded-lg border px-4 py-6 font-sans md:px-10"
    >
      <h1 class="mb-6 text-2xl">Welcome Back</h1>

      <div v-if="loginForm.loginError">
        {{ loginForm.loginError }}
      </div>
      <form
        class="mb-6 flex flex-col gap-4"
        @submit.prevent="signIn"
      >
        <IconField icon-position="left">
          <InputIcon><i class="pi pi-user"></i></InputIcon>
          <InputText
            id="username"
            v-model="loginForm.email"
            class="w-full"
            placeholder="username"
          />
        </IconField>

        <IconField icon-position="left">
          <InputIcon><i class="pi pi-lock"></i></InputIcon>
          <InputText
            id="password"
            v-model="loginForm.password"
            type="password"
            placeholder="password"
            class="w-full"
          />
        </IconField>

        <Button
          type="submit"
          class="py-2.5"
          label="Login"
        />
      </form>

      <NuxtLink
        class="text-surface-600 mb-1 text-center text-sm underline"
      >
        Forgot your password?
      </NuxtLink>
      <NuxtLink
        class="text-surface-600 text-center text-sm underline"
        >Don't have an account? Sign up</NuxtLink
      >

      <!-- Pwede tayo maglagay ng divider for soc med login (Oauth) -->
    </div>
  </NuxtLayout>
</template>

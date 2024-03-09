<script setup>
definePageMeta({
  layout: 'auth',
})

const { signIn } = useAuth()

const loginForm = ref({
  email: '',
  password: '',
})

const toast = useToast()
</script>

<template>
  <div>
    <NuxtLayout>
      <h1 class="dark:text-surface-300 mb-6 text-2xl">Welcome Back</h1>

      <form
        class="mb-6 flex flex-col gap-4"
        @submit.prevent="() => signIn(loginForm)"
      >
        <IconField icon-position="left">
          <InputIcon><i class="pi pi-user"></i></InputIcon>
          <InputText
            id="username"
            v-model="loginForm.email"
            class="w-full"
            placeholder="username"
            autocomplete="off"
          />
        </IconField>

        <IconField icon-position="left" class="mb-2">
          <InputIcon><i class="pi pi-lock"></i></InputIcon>
          <InputText
            id="password"
            v-model="loginForm.password"
            type="password"
            placeholder="password"
            class="w-full"
          />
        </IconField>

        <Button type="submit" class="py-2.5" label="Login" />
      </form>

      <NuxtLink
        class="text-surface-600 dark:text-surface-500 mb-1 text-center text-sm underline"
      >
        Forgot your password?
      </NuxtLink>
      <NuxtLink
        to="/signup"
        class="text-surface-600 dark:text-surface-500 text-center text-sm underline"
        >Don't have an account? Sign up</NuxtLink
      >

      <Toast />

      <!-- Pwede tayo maglagay ng divider for soc med login (Oauth) -->
    </NuxtLayout>
  </div>
</template>

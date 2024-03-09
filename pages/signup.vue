<script setup>
definePageMeta({
  layout: 'auth',
})

const { signUp } = useAuth()

const signUpForm = ref({ email: '', password: '' })
</script>

<template>
  <div>
    <NuxtLayout>
      <h1 class="dark:text-surface-300 mb-6 text-2xl">Sign Up</h1>

      <form
        class="mb-6 flex flex-col gap-4"
        @submit.prevent="() => signUp(signUpForm)"
      >
        <div class="flex flex-col gap-1">
          <label class="dark:text-surface-400 text-sm" for="username"
            >Email</label
          >
          <InputText
            id="username"
            v-model="signUpForm.email"
            aria-describedby="username-help"
            placeholder="username"
            autocomplete="off"
          />
        </div>

        <div class="mb-2 flex flex-col gap-1">
          <label class="dark:text-surface-400 text-sm" for="password"
            >Password</label
          >
          <InputText
            id="password"
            v-model="signUpForm.password"
            type="password"
            class="w-full"
            aria-describedby="username-help"
            placeholder="password"
          />
          <small id="password-help" class="dark:text-surface-400"
            >Your password must be atleast 6 characters.</small
          >
        </div>

        <Button type="submit" class="py-2.5" label="Sign Up" />
      </form>

      <NuxtLink
        class="text-surface-600 dark:text-surface-500 mb-1 text-center text-sm underline"
      >
        Forgot your password?
      </NuxtLink>
      <NuxtLink
        to="/login"
        :watch="$route"
        class="text-surface-600 dark:text-surface-500 text-center text-sm underline"
        >Already have an account? Login</NuxtLink
      >
    </NuxtLayout>
  </div>
</template>

<script setup></script>

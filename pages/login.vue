<script setup>
definePageMeta({
  layout: 'auth',
})

const loginForm = reactive({ username: '', pass: '' })

watch(loginForm, () => {
  console.log(loginForm.value)
})
</script>

<template>
  <NuxtLayout>
    <div
      class="flex w-full flex-col rounded-lg border px-4 py-6 font-sans md:px-10"
    >
      <h1 class="mb-6 text-2xl">Welcome Back</h1>

      <IconField icon-position="left" class="mb-4">
        <InputIcon><i class="pi pi-user"></i></InputIcon>
        <InputText
          id="username"
          v-model="loginForm.username"
          class="w-full"
          placeholder="username"
        />
      </IconField>

      <IconField icon-position="left" class="mb-6">
        <InputIcon><i class="pi pi-lock"></i></InputIcon>
        <InputText
          id="password"
          v-model="loginForm.pass"
          type="password"
          placeholder="password"
          class="w-full"
        />
      </IconField>

      <Button class="mb-6 py-2.5">Login</Button>

      <NuxtLink
        to="/about"
        class="text-surface-600 mb-1 text-center text-sm underline"
      >
        Forgot your password?
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="text-surface-600 text-center text-sm underline"
        >Don't have an account? Sign up</NuxtLink
      >

      <!-- Pwede tayo maglagay ng divider for soc med login (Oauth) -->
    </div>
  </NuxtLayout>
</template>

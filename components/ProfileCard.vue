<script setup>
defineProps({
  avatar: {
    type: String,
    default:
      'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  },

  followers: {
    type: Number,
    required: true,
  },

  following: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eaque amet mollitia?',
  },
})
</script>

<template>
  <Card class="bg-surface-section" pt:content:class="px-5 text-center">
    <template #header>
      <div
        class="h-28 bg-[url('@/assets/images/scattered-forcefields.svg')] bg-cover"
      ></div>
    </template>

    <template #content>
      <div class="mb-6 flex items-start justify-between">
        <p class="flex flex-col items-center justify-start">
          <span class="font-medium">{{ followers }}</span
          ><span class="text-xs capitalize">followers</span>
        </p>
        <Avatar
          class="dark:text-surface-100 border-3 -mt-10 h-20 w-20"
          pt:image:class="rounded-lg border-2"
          :image="avatar"
        />
        <p class="flex flex-col items-center justify-start">
          <span class="font-medium">{{ following }}</span
          ><span class="text-xs capitalize">following</span>
        </p>
      </div>

      <p class="mb-4">
        <span class="block leading-4">{{ name }}</span>
        <small class="text-surface-500">{{ email }}</small>
      </p>

      <p class="text-balance text-sm font-light">
        {{ bio }}
      </p>

      <Divider />

      <Button label="My Profile" class="w-full" />
    </template>
  </Card>
</template>

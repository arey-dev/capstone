<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div>
    <div class="max-w-72">
      <ProfileCard
        name="John Doe"
        :email="user?.email"
        :followers="1022"
        :following="2342"
      />
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
</script>
<template>
  <pre>{{ user }}</pre>
</template>

<script setup>
const { signOut } = useAuth()

const items = ref([
  {
    label: 'profile',
    icon: 'pi pi-sign-out',
  },
  {
    label: 'settings',
    icon: 'pi pi-sign-out',
  },
  {
    label: 'logout',
    icon: 'pi pi-sign-out',
    command: signOut,
  },
])
const menu = ref(null)

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <Menubar>
    <template #end>
      <div class="flex items-center gap-2">
        <Avatar label="RA" />
        <span class="px-2 text-sm">User Name</span>
        <Button
          type="button"
          icon="pi pi-chevron-down"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          pt:root:class="flex justify-center items-center bg-transparent text-xs"
          @click="toggle"
        />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </template>
  </Menubar>
</template>

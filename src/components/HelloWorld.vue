<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ msg: string }>()
</script>

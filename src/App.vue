<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="container flex p-4">
        <RouterLink to="/" class="text-purple-700 underline hover:text-purple-900">Home</RouterLink>
        <RouterLink to="/about" class="ml-auto text-purple-700 underline hover:text-purple-900"
          >About</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

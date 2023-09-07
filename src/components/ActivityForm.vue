<script setup>
import { ref } from 'vue'
import activityFormData from '@/data/activityFormData.json'

let currentStep = ref(activityFormData[0].id)
let activityForm = ref(activityFormData)
let currentFormData = ref(activityForm.value.find((step) => step.id === currentStep.value)).value
</script>

<template>
  <h2 class="text-4xl font-bold">{{ currentFormData.title }}</h2>
  <form class="py-8 text-xl" v-for="field in currentFormData.fields" :key="field.id">
    <label class="sr-only mb-1" :for="field.id">{{ field.type }}</label>
    <template v-if="field.type === 'input'">
      <input
        class="mb-4 block w-full border-2 border-black p-2"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
      />
    </template>
    <template v-else-if="field.type === 'select'">
      <select name="" id="" class="mb-4 block w-full border-2 border-black p-2">
        <option value="" disabled selected>Select an option</option>
        <option v-for="option in field.options" :key="option.id" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </template>
    <button
      class="mb-4 mt-6 block bg-purple-700 px-10 py-3 font-bold text-white hover:bg-purple-900"
      type="submit"
      :on-click="(currentStep = currentStep + 1)"
    >
      Next
    </button>
    <a href="" class="text-purple-700 underline hover:text-purple-900"
      >I don't care, pick for me!</a
    >
  </form>
</template>

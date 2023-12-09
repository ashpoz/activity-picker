<script setup>
import { onBeforeUpdate, onMounted, onUpdated, reactive, ref } from 'vue'
import activityFormData from '@/data/activityFormData.json'
import activitiesData from '@/data/activities.json'

let currentStep = ref(activityFormData[0].id)

let activityForm = ref(null)

onUpdated(() => {
  console.log(activityForm.value)
})

// function navigateForm(direction) {
//   if (direction === 'next') {
//     currentStep.value++
//     console.log(activityForm.value)
//   } else if (direction === 'back') {
//     currentStep.value--
//   }
// }

function handleSubmit() {
  // TODO: temporary, remove later
  alert('submitted!')

  // get form data
  const formData = new FormData(activityForm.value)

  // convert to obj
  const data = {}
  for (const [key, value] of formData.entries()) {
    data[key] = value
  }

  console.log(data)
  // filter for matches in data

  // if no matches, alert user
  // if matches, save array
  // if array length > 1, randomly select one
  // else, select the one
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="mb-8 text-4xl font-bold">{{ activityFormData[currentStep].title }}</h2>
    <template v-if="currentStep != 0">
      <button
        @click="currentStep--"
        class="mb-4 text-purple-700 underline hover:text-purple-900"
        type="button"
      >
        &#8592; Back
      </button>
    </template>
    <template v-for="field in activityFormData[currentStep].fields" :key="field[id]">
      <label class="sr-only mb-1" :for="field.id">{{ field.type }}</label>
      <template v-if="field.type === 'input'">
        <input
          class="mb-4 block w-full border-2 border-black p-2"
          v-model="activityForm[field.id]"
          :type="field.type"
          :id="field.id"
          :placeholder="field.placeholder"
        />
      </template>
      <template v-else-if="field.type === 'checkbox'">
        <div class="flex flex-wrap gap-2">
          <fieldset class="relative" v-for="option in field.options" :key="option.id">
            <input
              type="checkbox"
              :name="option.value"
              :value="option.value"
              class="peer absolute h-full w-full cursor-pointer opacity-0"
            />
            <label
              :for="option.value"
              class="flex rounded-3xl border-2 border-purple-500 px-4 py-2 after:ml-2 after:hidden after:w-4 after:bg-checkmark after:bg-contain after:bg-center after:bg-no-repeat peer-checked:bg-purple-500 peer-checked:text-white peer-checked:after:block"
            >
              <span>
                {{ option.label }}
              </span>
            </label>
          </fieldset>
        </div>
      </template>
      <template v-else-if="field.type === 'select'">
        <select name="" id="" class="mb-4 block w-full border-2 border-black p-2">
          <option value="" disabled selected>Select an option</option>
          <option v-for="option in field.options" :key="option.id" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </template>
    </template>
    <button
      v-if="currentStep < activityFormData.length - 1"
      @click="currentStep++"
      class="mb-4 mt-6 block bg-purple-700 px-10 py-3 font-bold text-white hover:bg-purple-900"
      type="button"
    >
      Next
    </button>
    <button
      v-else
      class="mb-4 mt-6 block bg-purple-700 px-10 py-3 font-bold text-white hover:bg-purple-900"
      type="submit"
    >
      Submit
    </button>
    <button class="text-purple-700 underline hover:text-purple-900">
      I don't care, pick for me!
    </button>
  </form>
</template>

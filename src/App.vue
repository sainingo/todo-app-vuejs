<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const task = ref('')

const input_todo = ref('')

watch(task, (newTask) => {
  localStorage.setItem('task', newTask)
})
</script>

<template>
<div>
  <div class="bg-bg-mobile-light h-[200px] bg-center bg-no-repeat bg-cover text-white" >
    <div class="flex justify-between p-8">
      <h1 class="text-3xl tracking-[.4em] font-semibold">TODO</h1>
      <img src="./assets/images/ICON-MOON.SVG" height="30px" width="30px" alt="moon icon" />
    </div>
  <div class="flex">
    <input type="text" placeholder="Create a new todo" class="text-center p-4 rounded w-[80%] mx-auto outline-none text-black"/>
  </div>
  </div>
  <section>
    <div class="w-[80%] mx-auto mt-[-30px] bg-white p-2 rounded border shadow-lg h-[500px]">
      <div class="flex justify-between m-2 border-b-2 p-2">
        <input type="checkbox" class="rounded-full border-none bg-gray-100"/>
        <span class="w-full ml-4">Jog around the park</span>
        <button>
          <img src="./assets/images/ICON-CROSS.SVG" />
        </button>
      </div>
    </div>
  </section>
</div>
</template>

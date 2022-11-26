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
  <div class="bg-">
    <h1 class="text-2xl">TODO</h1>
  <div>
    <input type="text" placeholder="Create a new todo"/>
  </div>
  </div>
</div>
</template>

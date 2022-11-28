<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const task = ref('')

const input_todo = ref('')

watch(todos, (newTask) => {
  localStorage.setItem('task', JSON.stringify(newTask))
}, {
  deep: true
})

const addTodo = (e) => {
  e.preventDefault();
  if (input_todo.value.trim() === '' || input_todo.value === null) {
    return
  }

  todos.value.push({
    task: input_todo.value,
    completed: false,
    createdAt: new Date().getTime()
  })
  input_todo.value = ''
}

const toggleComplete = (todo) => {
  todo.completed = !todo.completed;
}

const removeTodo = (idx) => {
  todos.value.splice(idx, 1);
}
onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('task')) || []
})
</script>

<template>
<div class="lg:bg-bg-desktop-light lg:h-[300px] lg:w-full lg:bg-cover lg:bg-no-repeat">
  <div class="lg:w-[50%] mx-auto">
    <div class="lg:bg-none bg-bg-mobile-light h-[200px] bg-center bg-no-repeat bg-cover text-white" >
    <div class="flex justify-between p-8">
      <h1 class="text-2xl tracking-[.4em] font-semibold">TODO</h1>
      <img src="./assets/images/ICON-MOON.SVG" width="25px" height="20px" alt="moon icon" class="cursor-pointer"/>
    </div>
    <form class="flex" @submit="addTodo">
    <input type="text" placeholder="Create a new todo" v-model="input_todo" class="text-center p-4 rounded w-[80%] mx-auto outline-none text-black"/>
  </form>
  </div>
  <section>
    <div class="w-[80%] mx-auto mt-[-30px] bg-white p-2 rounded border shadow-2xl h-[400px] lg:h-[500px] lg:p-4 font-light">
      <div v-for="(todo, idx) in todos"  class="flex justify-between m-4 border-b-2 p-2">
        <input type="checkbox" @click="toggleComplete(todo)" class="border-none  w-[1.1rem] rounded-full outline-none input-checkbox"/>
        <span class="w-full ml-6"  :class="{done: todo.completed}">{{todo.task}}</span>
        <button @click="removeTodo(idx)">
          <img src="./assets/images/ICON-CROSS.SVG" />
        </button>
      </div>
      <div class="flex justify-between m-4 p-4 font-normal text-gray-500">
      <span>{{todos.length}} items left</span>
      <button>Clear Completed</button>
    </div>
    </div>
    <div class="flex justify-center gap-10 p-4 border border-gray-200 w-[80%] mx-auto mt-8 rounded shadow-lg font-normal text-gray-600 text-lg hover:cursor">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <p class="font-extralight text-center mt-20 text-gray-600">Drag and drop to reorder list</p>
  </section>
  </div>
</div>
</template>

<style>

.done {
    text-decoration: line-through;
    opacity: .5;
}
</style>
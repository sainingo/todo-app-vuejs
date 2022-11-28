<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const todos = ref([])

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

const clearCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.completed)
}
onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('task')) || []
})
</script>

<template>
<div class="dark:bg-very-dark-blue dark:h-screen">
  <div class="">
    <div class="lg:w-full lg:dark:bg-bg-desktop-dark lg:bg-bg-desktop-light lg:dark:bg-no-repeat lg:bg-cover bg-bg-mobile-light dark:bg-bg-mobile-dark dark:brightness-125 h-[200px] bg-center bg-no-repeat bg-cover text-white" >
    <div class="flex justify-between p-8 lg:w-[50%] mx-auto">
      <h1 class="text-2xl tracking-[.4em] font-semibold">TODO</h1>
      <button @click="toggleDark()">
        <img src='./assets/images/ICON-MOON.SVG' alt="moon icon" class="cursor-pointer dark:bg-sun-icon"/>
      </button>
    </div>
    <form class="flex lg:w-[50%] mx-auto " @submit="addTodo">
    <input type="text" placeholder="Create a new todo" v-model="input_todo" class="text-center dark:text-light-text dark:brightness-125  dark:bg-light-grayish-blue p-4 rounded w-[80%] mx-auto outline-none text-black"/>
  </form>
  </div>
  <section class="lg:w-[50%] mx-auto">
    <div class=" dark:brightness-125 w-[80%] dark:bg-light-grayish-blue dark:text-light-text mx-auto mt-[-30px] bg-white p-2 rounded border shadow-2xl h-[400px] lg:h-[500px] lg:p-4 font-light dark:border-none">
      <div v-for="(todo, idx) in todos"  class="flex justify-between m-4 border-b-2 p-2 dark:border-b dark:border-gray-600/70 ">
        <input type="checkbox" @click="toggleComplete(todo)" class="border-none  w-[1.1rem] rounded-full outline-none input-checkbox"/>
        <span class="w-full ml-6"  :class="{done: todo.completed}">{{todo.task}}</span>
        <button @click="removeTodo(idx)">
          <img src="./assets/images/ICON-CROSS.SVG" />
        </button>
      </div>
      <div class="flex justify-between m-4 p-4 font-normal text-gray-500">
      <span>{{todos.length}} items left</span>
      <button @click="clearCompleted">Clear Completed</button>
    </div>
    </div>
    <div class="flex dark:brightness-125  dark:bg-light-grayish-blue dark:border-none justify-center gap-10 p-4 border border-gray-200 w-[80%] mx-auto mt-8 rounded shadow-lg font-normal text-gray-600 text-lg hover:cursor">
      <button :class="{active: todos.length > 0}">All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <p class="font-extralight text-center mt-20 text-gray-600 dark:text-light-text">Drag and drop to reorder list</p>
  </section>
  </div>
</div>
</template>
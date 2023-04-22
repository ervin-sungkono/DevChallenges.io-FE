<script setup>
  import { ref, computed, watchEffect } from 'vue'
  import CustomInput from './components/Input.vue';
  import CustomTab from './components/Tab.vue';

  const STORAGE_KEY = 'todo-data'

  const filters = {
    all: (todos) => todos,
    active: (todos) => todos.filter((todo) => !todo.completed),
    completed: (todos) => todos.filter((todo) => todo.completed)
  }

  const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
  const visibilityTypes = ref(['all', 'active', 'completed'])
  const visibility = ref('all')
  const title = ref('')
  const filteredTodos = computed(() => filters[visibility.value](todos.value))

  watchEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
  })
    
  function addTodo() {
    const value = title.value.trim()
    console.log(value)
    if (value) {
      todos.value.push({
        id: Date.now(),
        title: value,
        completed: false
      })
      title.value = ''
    }
  }

  function removeTodo(todo) {
    todos.value.splice(todos.value.indexOf(todo), 1)
  }

  function removeCompleted() {
    todos.value = filters.active(todos.value)
  }

</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>#todo</h1>
    </header>
    <section class="main-section">
      <custom-tab
        :visibilityTypes="visibilityTypes"
        :visibility="visibility"
        @change-visibility="newVisibility => visibility = newVisibility"
      />
      <custom-input 
        :name="'todo'"
        :placeholder="'Add details'"
        :value="title"
        @update:value="newValue => title = newValue"
        @on-submit="addTodo"
      />
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)" v-if="visibility === 'completed'">
              <font-awesome-icon :icon="['fas', 'trash']"></font-awesome-icon>
            </button>
          </div>
        </li>
      </ul>
      <div class="btn-wrapper">
        <button id="delete-completed-btn" v-if="visibility === 'completed'" @click="removeCompleted">
          <font-awesome-icon :icon="['fas', 'trash']"></font-awesome-icon>
          <p>Delete All</p>
        </button>
      </div>
    </section>
    <footer>Created by <a href="https://github.com/ervin-sungkono">Ervin Cahyadinata Sungkono</a> - devChallenges.io</footer>
  </section>
</template>

<style>
  .todoapp{
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
  }
  .header > h1{
      font-family: 'Raleway', sans-serif;
      font-size: 36px;
      margin-bottom: 3rem;
  }
  .main-section{
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .todo-list{
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: scroll;
  }
  .todo{
    list-style: none;
  }
  .todo.completed{
    text-decoration: line-through;
  }
  .view{
    display: flex;
    gap: 0.5rem;
  }
  .view > input[type="checkbox"]{
    width: 24px;
    height: 24px;
  }
  .view > label{
    font-size: 18px;
    font-weight: 500;
  }
  .view > button{
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    margin-left: auto;
    color: rgb(226, 16, 16);
  }
  .btn-wrapper{
    display: flex;
    justify-content: end;
  }
  #delete-completed-btn{
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    background-color: rgb(226, 16, 16);
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-weight: 600;
  }

  #delete-completed-btn:hover{
    background-color: rgb(184, 10, 10);
  }
  footer{
    position: absolute;
    bottom: 24px;
    font-weight: 600;
    text-align: center;
    padding-inline: 1.5rem;
  }
</style>
import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    todos: JSON.parse(localStorage.getItem('my-todos')) || []
  }),
  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo)
      localStorage.setItem('my-todos', JSON.stringify(state.todos))
    },
    completeTodo(state, todo) {
      const idx = state.todos.findIndex(t => t.id === todo.id)
      state.todos[idx].type = 'completed';
      localStorage.setItem('my-todos', JSON.stringify(state.todos))
    },
    clearCompleted(state, todo) {
      state.todos = state.todos.filter((item)=>item.type == 'active')
      localStorage.setItem('my-todos', JSON.stringify(state.todos))
    }
  },
  getters: {
    activeTodos(state) {
      return [...state.todos].filter((item)=>item.type == 'active')
    },
    completeTodos(state) {
      return [...state.todos].filter((item)=>item.type == 'completed')
    },
    getTodos(state) {
      return [...state.todos]
    }
  }
})

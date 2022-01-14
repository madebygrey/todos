<template>
  <ul class="todos-items">
    <li
      :class="['todos-item', todo.type]"
      v-for="todo in filterTodos"
      :key="todo.id"
      @click="completeTodo(todo)"
    >
      <span class="todos-item__check"></span>
      <span class="todos-item__val">{{ todo.title }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ['type'],
  data() {
    return {
    }
  },
  methods: {
    completeTodo(todo) {
      this.$store.commit("completeTodo", todo);
    }
  },
  computed: {
    ...mapGetters({
      getTodos: 'getTodos',
      activeTodos: 'activeTodos',
      completeTodos: 'completeTodos'
    }),
    filterTodos() {
        if(this.type == 'active') {
          return this.activeTodos
        } else if(this.type == 'completed') {
          return this.completeTodos
        } else {
          return this.getTodos
        }
    }
  }
};
</script>

<style scoped>
.todos-item {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #dfdfdf;
  cursor: pointer;
}
.todos-item__check {
  width: 20px;
  flex: 0 0 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #dfdfdf;
  position: relative;
  margin-right: 10px;
}
.todos-item__check:after {
  content: "\2713";
  font-size: 14px;
  color: green;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.3s linear;
}
.todos-item.completed .todos-item__check:after {
  opacity: 1;
}
.todos-item__val {
  transition: 0.3s linear;
  font-size: 16px;
  line-height: normal;
}
.todos-item.completed .todos-item__val {
  text-decoration: line-through;
  color: #dfdfdf;
}
</style>
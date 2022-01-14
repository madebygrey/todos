<template>
  <div class="todos">
    <div class="todos-input">
      <span class="todos-input__arr"></span>
      <input
        type="text"
        placeholder="What needs to be done?"
        v-model="title"
        @keyup.enter="addTodo"
      />
    </div>
    <todos-list :type="type"></todos-list>
    <todos-actions @changeFilter='changeFilter'></todos-actions>
  </div>
</template>

<script>
import TodosList from "../components/TodosList.vue";
import TodosActions from "../components/TodosActions.vue";
export default {
  components: { TodosList, TodosActions },
  data() {
    return {
      title: "",
      type: null
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: Date.now().toString(),
        title: this.title,
        type: "active",
      };
      if (this.title.length > 0) {
        this.$store.commit("createTodo", newTodo);
        this.title = "";
      }
    },
    changeFilter(type) {
      this.type = type;
    }
  },
};
</script>

<style scoped>
.todos {
  width: 500px;
  max-width: 100%;
  border: 2px solid #dfdfdf;
}
.todos-input {
  width: 100%;
  position: relative;
}
.todos-input input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #dfdfdf;
  box-shadow: none;
  outline: none;
  height: 60px;
  font-size: 22px;
  font-style: italic;
  padding: 0 40px;
}
.todos-input__arr {
  border: solid #dfdfdf;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  left: 15px;
  top: 45%;
  transform: rotate(45deg) translateY(-50%);
  -webkit-transform: rotate(45deg) translateY(-50%);
}
</style>
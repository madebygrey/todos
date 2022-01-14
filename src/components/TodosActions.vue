<template>
  <div class="todos-actions">
    <span class="todos-left">{{$store.getters.activeTodos.length}} items left</span>
    <ul class="todos-filter">
      <li :class="['todos-filter__item', { active: isActive == null }]" @click="changeFilter(null)">All</li>
      <li :class="['todos-filter__item', { active: isActive == 'active' }]" @click="changeFilter('active')">Active</li>
      <li :class="['todos-filter__item', { active: isActive == 'completed' }]" @click="changeFilter('completed')">Completed</li>
    </ul>
    <a href="#" class="todos-clear" v-if="$store.getters.completeTodos.length" @click="$store.commit('clearCompleted')">Clear completed</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: null
    }
  },
  methods: {
    changeFilter(filter) {
      this.$emit('changeFilter', filter)
      this.isActive = filter
    }
  }
};
</script>

<style scoped>
.todos-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 14px;
}
.todos-filter {
  display: flex;
  align-items: center;
}
.todos-filter__item {
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.3s linear;
  margin: 0 2.5px;
  border: 1px solid transparent;
}
.todos-filter__item.active {
  border-color: #dfdfdf;
}
.todos-clear {
  color: #2c3e50;
  text-decoration: none;
  transition: 0.3s linear;
}
.todos-clear:hover {
  opacity: 0.7;
}
</style>
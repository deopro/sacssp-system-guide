<template>
  <ul>
  <li>
    <div>
      <button
        v-if="item.children"
        @click="$emit('toggle', item.key)"
        class="nav-button"
        :class="{ 'nav-button-active': openSections.includes(item.key) }"
      >
        <span>{{ item.label }}</span>
        <span class="icon">
          <svg v-if="openSections.includes(item.key)" class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
          <svg v-else class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </button>
      <button
        v-else
        @click="$emit('select', [...path, item.key])"
        class="nav-button"
        :class="{ 'nav-button-selected': selected[selected.length-1] === item.key }"
      >
        {{ item.label }}
      </button>
    </div>
    <ul v-if="item.children && openSections.includes(item.key)" class="nav-submenu">
      <SidebarNavItem
        v-for="child in item.children"
        :key="child.key"
        :item="child"
        :selected="selected"
        :openSections="openSections"
        :path="[...path, item.key]"
        @select="$emit('select', $event)"
        @toggle="$emit('toggle', $event)"
      />
    </ul>
  </li>
</ul>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  selected: {
    type: Array,
    required: true
  },
  openSections: {
    type: Array,
    required: true
  },
  path: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.nav-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  background-color: white;
  color: #166534;
  border: none;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #f0fdf4;
}

.nav-button:focus {
  outline: none;
}

.nav-button-active {
  background-color: #f0fdf4;
  color: #166534;
  font-weight: 600;
}

.nav-button-selected {
  background-color: #dcfce7;
  color: #166534;
  font-weight: 700;
}

.icon {
  display: flex;
  align-items: center;
}

.icon-svg {
  width: 1rem;
  height: 1rem;
}

.nav-submenu {
  margin-left: 1rem;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style> 
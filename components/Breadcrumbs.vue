<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(crumb, i) in items" :key="crumb.key">
      <span v-if="i !== 0" class="separator">/</span>
      <span :class="{ 'breadcrumb-active': i === items.length - 1, 'breadcrumb-link': i !== items.length - 1 }">
        {{ crumb.label }}
      </span>
    </template>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #166534;
  gap: 0.5rem;
}

.separator {
  margin: 0 0.25rem;
}

.breadcrumb-link {
  cursor: pointer;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-active {
  font-weight: 700;
}
</style> 
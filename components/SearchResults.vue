<template>
  <div class="search-results">
    <h2 class="results-title">Search Results</h2>
    <div v-if="results.length === 0" class="no-results">No results found.</div>
    <ul v-else class="results-list">
      <li v-for="result in results" :key="result.id" class="result-item">
        <button class="result-link" @click="$emit('select', result)">
          <div class="result-title">{{ result.title }}</div>
          <div class="result-snippet">{{ result.snippet }}</div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  results: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.search-results {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(7,92,9,0.09);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin-bottom: 2rem;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.results-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #075c09;
  margin-bottom: 1.5rem;
}
.no-results {
  color: #888;
  font-size: 1.1rem;
  padding: 1.5rem 0;
}
.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.result-item {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.2rem;
}
.result-link {
  text-decoration: none;
  color: #075c09;
  display: block;
  transition: background 0.18s;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}
.result-link:hover {
  background: #e6f4ea;
}
.result-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.result-snippet {
  color: #222;
  font-size: 1rem;
}
</style> 
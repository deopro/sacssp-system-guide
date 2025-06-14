<template>
  <nav class="sidebar">
    <div class="sidebar-header">
      <h2 class="sidebar-title">
        <span class="icon">📘</span>
        ProfCon Manual
      </h2>
      <div class="search-container">
        <input
          v-model="search"
          type="text"
          placeholder="Search guide..."
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>
    </div>
    
    <div class="nav-scroll-container">
      <ul class="nav-list">
        <SidebarNavItem
          v-for="section in filteredNav"
          :key="section.key"
          :item="section"
          :selected="selected"
          :openSections="openSections"
          @select="onSelect"
          @toggle="toggle"
        />
      </ul>
    </div>
    
    <div class="sidebar-footer">
      <div class="version-tag">v2.1.4</div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import SidebarNavItem from './SidebarNavItem.vue'

const props = defineProps({
  selected: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const nav = [
  {
    label: '1. Accessing the Professional Conduct System',
    key: 'accessing',
    icon: '🔑',
    children: [
      { label: '1.1 Requirements', key: 'requirements' },
    ],
  },
  {
    label: '2. Using the System',
    key: 'using',
    icon: '🖥️',
    children: [
      { label: '2.1 Register a Complaint', key: 'registerComplaint' },
      { label: 'i. Complaint Of Alleged Unprofessional Conduct', key: 'complaintOfAllegedUnprofessionalConduct' },
      { label: 'ii. Address Information', key: 'addressInformation' },
      { label: 'iii. Complainant Details', key: 'complainantDetails' },
      { label: 'iv. Identifying Particulars of The Respondent', key: 'identifyingParticulars' },
      { label: 'v. Respond to Complain (Complaint Narrative)', key: 'respondToComplain' },
    ],
  },
  {
    label: '3. Complaint Management',
    key: 'complaintManagement',
    icon: '📋',
  },
  {
    label: '4. Communication',
    key: 'communication',
    icon: '✉️',
  },
  {
    label: '5. Frequently Asked Questions',
    key: 'faq',
    icon: '❓',
  },
]

const search = ref('')
const openSections = ref(['accessing', 'using'])

const filteredNav = computed(() => {
  if (!search.value.trim()) return nav
  const q = search.value.toLowerCase()
  return nav
    .map(section => {
      if (section.children) {
        const childrenFiltered = section.children.filter(child =>
          child.label.toLowerCase().includes(q)
        )
        if (
          section.label.toLowerCase().includes(q) ||
          childrenFiltered.length > 0
        ) {
          return {
            ...section,
            children: childrenFiltered,
          }
        }
        return null
      } else {
        if (section.label.toLowerCase().includes(q)) {
          return section
        }
        return null
      }
    })
    .filter(Boolean)
})

function toggle(key) {
  if (openSections.value.includes(key)) {
    openSections.value = openSections.value.filter(k => k !== key)
  } else {
    openSections.value.push(key)
  }
}

function onSelect(path) {
  emit('select', path)
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  border-right: 1px solid #e9ecef;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.sidebar-header {
  padding: 1.5rem 1.25rem 1rem;
  border-bottom: 1px solid #e9ecef;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar-title .icon {
  font-size: 1.1em;
}

.search-container {
  position: relative;
  margin-bottom: 0.5rem;
}

.search-input {
  width: 100%;
  padding: 0.625rem 1rem 0.625rem 2.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  font-size: 0.875rem;
  color: #4a5568;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  background-color: #ffffff;
}

.search-input::placeholder {
  color: #94a3b8;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 0.875rem;
}

.nav-scroll-container {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: #e2e8f0 transparent;
}

.nav-scroll-container::-webkit-scrollbar {
  width: 6px;
}

.nav-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.nav-scroll-container::-webkit-scrollbar-thumb {
  background-color: #e2e8f0;
  border-radius: 3px;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
}

.version-tag {
  font-size: 0.75rem;
  color: #64748b;
  background-color: #f1f5f9;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sidebar {
    height: auto;
    max-height: 80vh;
  }
}
</style>
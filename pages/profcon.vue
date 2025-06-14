<template>
  <LayoutDefault>
    <template #sidebar>
      <SidebarNav :selected="selectedPath" @select="onSelect" />
    </template>
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
    <component :is="currentComponent" />
  </LayoutDefault>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LayoutDefault from '../layouts/default.vue'
import SidebarNav from '../components/SidebarNav.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import ProfConRequirements from '../components/profcon/Requirements.vue'
import ProfConRegisterComplaint from '../components/profcon/RegisterComplaint.vue'
import ProfConComplaintOfAllegedUnprofessionalConduct from '../components/profcon/ComplaintOfAllegedUnprofessionalConduct.vue'
import ProfConAddressInformation from '../components/profcon/AddressInformation.vue'
import ProfConComplainantDetails from '../components/profcon/ComplainantDetails.vue'
import ProfConIdentifyingParticulars from '../components/profcon/IdentifyingParticulars.vue'
import ProfConRespondToComplain from '../components/profcon/RespondToComplain.vue'
import ProfConComplaintManagement from '../components/profcon/ComplaintManagement.vue'
import ProfConCommunication from '../components/profcon/Communication.vue'
import ProfConFAQ from '../components/profcon/FAQ.vue'

type SectionKey =
  | 'requirements'
  | 'registerComplaint'
  | 'complaintOfAllegedUnprofessionalConduct'
  | 'addressInformation'
  | 'complainantDetails'
  | 'identifyingParticulars'
  | 'respondToComplain'
  | 'complaintManagement'
  | 'communication'
  | 'faq'

type BreadcrumbItem = { key: string; label: string }

type NavItem = {
  label: string
  key: string
  children?: NavItem[]
}

const nav: NavItem[] = [
  {
    label: '1. Accessing the Professional Conduct System',
    key: 'accessing',
    children: [
      { label: '1.1 Requirements', key: 'requirements' },
    ],
  },
  {
    label: '2. Using the System',
    key: 'using',
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
  },
  {
    label: '4. Communication',
    key: 'communication',
  },
  {
    label: '5. Frequently Asked Questions',
    key: 'faq',
  },

]

const selectedPath = ref<SectionKey[]>(['requirements'])

const componentsMap: Record<SectionKey, any> = {
  requirements: ProfConRequirements,
  registerComplaint: ProfConRegisterComplaint,
  complaintOfAllegedUnprofessionalConduct: ProfConComplaintOfAllegedUnprofessionalConduct,
  addressInformation: ProfConAddressInformation,
  complainantDetails: ProfConComplainantDetails,
  identifyingParticulars: ProfConIdentifyingParticulars,
  respondToComplain: ProfConRespondToComplain,
  complaintManagement: ProfConComplaintManagement,
  communication: ProfConCommunication,
  faq: ProfConFAQ,
}

function findBreadcrumbs(path: string[], navItems: NavItem[] = nav, acc: BreadcrumbItem[] = []): BreadcrumbItem[] {
  if (!path.length) return acc
  const [head, ...rest] = path
  const item = navItems.find(i => i.key === head)
  if (!item) return acc
  acc.push({ key: item.key, label: item.label })
  if (rest.length && item.children) {
    return findBreadcrumbs(rest, item.children, acc)
  }
  return acc
}

const breadcrumbs = computed<BreadcrumbItem[]>(() => findBreadcrumbs(selectedPath.value))

const currentComponent = computed(() => {
  const last = selectedPath.value[selectedPath.value.length - 1] as SectionKey
  return componentsMap[last]
})

function onSelect(path: string[]) {
  selectedPath.value = path as SectionKey[]
}
</script> 
<template>
  <div class="centered-layout-bg">
    <div class="centered-layout">
      <aside class="centered-sidebar">
        <div class="sidebar-header">
          <h1 class="sidebar-title">SACSSP System Guide</h1>
        </div>
        <div class="modern-search-container">
          <div class="modern-search-row">
            <input v-model="searchQuery" type="text" placeholder="Search guide..." class="modern-search-input"
              @keyup.enter="onSearch" />
            <button class="modern-search-btn" @click="onSearch" aria-label="Search">
              <svg class="modern-search-icon" viewBox="0 0 24 24">
                <path
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>
          <div class="modern-search-helper">Press <b>Enter</b> or click the search icon to search the user guide.</div>
        </div>
        <nav class="centered-nav-menu">
          <div v-for="item in sidebarMenu" :key="item.id">
            <button @click="item.hasSubmenu ? toggleSubmenu(item.id) : (activeTab = item.id, showResults = false)" class="centered-nav-item" :class="{ active: activeTab === item.id }">
              <span class="nav-icon">
                <svg v-if="item.id === 'home'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <path d="M3 12l9-9 9 9" />
                  <path d="M9 21V9h6v12" />
                </svg>
                <svg v-else-if="item.id === 'it-system'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 20h8" />
                  <path d="M12 16v4" />
                </svg>
                <svg v-else-if="item.id === 'profcon'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
                <svg v-else-if="item.id === 'member'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                </svg>
                <svg v-else-if="item.id === 'dashboard'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <rect x="3" y="13" width="7" height="8" rx="1" />
                  <rect x="14" y="8" width="7" height="13" rx="1" />
                  <rect x="14" y="3" width="7" height="4" rx="1" />
                </svg>
                <svg v-else-if="item.id === 'finance'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M2 11h20" />
                </svg>
                <svg v-else-if="item.id === 'admin'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <svg v-else-if="item.id === 'register'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/><path d="M16 11v2m0 0v2m0-2h2m-2 0h-2"/></svg>
                <svg v-else-if="item.id === 'login'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M12 12v4"/><path d="M9 16h6"/></svg>
                <svg v-else-if="item.id === 'reset'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="M12 15v2m0-6v2m-6 4v-4a6 6 0 0 1 12 0v4"/><rect x="6" y="19" width="12" height="2" rx="1"/></svg>
              </span>
              <div>
                <div class="centered-nav-main">{{ item.title }}</div>
                <div class="centered-nav-sub">{{ item.subtitle }}</div>
              </div>
              <span v-if="item.hasSubmenu" class="submenu-chevron" :class="{ 'expanded': expandedTabs.has(item.id) }">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </button>
            <div v-if="item.hasSubmenu && expandedTabs.has(item.id)" class="submenu">
              <button v-for="section in item.sections" :key="section.id" @click="onSubmenuItemClick(item.id, section.sectionId)" class="submenu-item">
                {{ section.title }}
              </button>
            </div>
          </div>
        </nav>
      </aside>
      <main class="centered-main-content">
        <div class="centered-content-card">
          <div v-if="activeTab === 'home'" class="system-guide-summary">
            <div class="summary-icon">
              <svg viewBox="0 0 32 32" fill="none" width="38" height="38">
                <rect x="4" y="6" width="24" height="20" rx="4" fill="#075c09"/>
                <rect x="8" y="10" width="16" height="2" rx="1" fill="#fff"/>
                <rect x="8" y="15" width="12" height="2" rx="1" fill="#fff"/>
                <rect x="8" y="20" width="10" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
            <div class="summary-content">
              <h2 class="summary-title">Welcome to the SACSSP System Guide</h2>
              <p class="summary-text">
                This interactive guide provides step-by-step instructions for using the SACSSP online system. Explore how to register, log in, manage your membership, handle professional conduct matters, access your dashboard, manage finances, and utilize admin features. Use the sidebar to navigate, search for topics, and click on sections for detailed help. Designed for clarity, accessibility, and a seamless user experience.
              </p>
            </div>
          </div>
          <div v-if="showResults">
            <SearchResults :results="searchResults" @select="onResultSelect" />
          </div>
          <div v-else>
            <div v-if="activeTab !== 'home'" class="modern-content-header">
              <h1 class="modern-content-title">{{ currentTab.title }}</h1>
              <p class="modern-content-subtitle">{{ currentTab.subtitle }}</p>
            </div>
            <component :is="activeContent" :section-ids="sectionIds" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import SearchResults from '../components/SearchResults.vue'
import ProfConContent from '../components/profcon/ProfConContent.vue'
import MemberContent from '../components/member/MemberContent.vue'
import DashboardContent from '../components/dashboard/DashboardContent.vue'
import FinanceContent from '../components/finance/FinanceContent.vue'
import AdminContent from '../components/admin/AdminContent.vue'
import RegisterContent from '../components/RegisterContent.vue'
import LoginContent from '../components/LoginContent.vue'
import ResetContent from '../components/ResetContent.vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const showResults = ref(false)
const searchResults = ref([] as {
  id: string;
  title: string;
  snippet: string;
  link: string;
  tab: string;
}[])
const activeTab = ref('home')
const router = useRouter()
const highlightTerm = ref('')

const tabs = [
  { id: 'home', title: 'Guide', href: '#home', sectionId: 'home', subtitle: 'System Guide Overview' },
  { id: 'register', title: 'Register as a User', sectionId: 'register', subtitle: 'Create a new user account' },
  { id: 'login', title: 'System Login', sectionId: 'login', subtitle: 'Access your account' },
  { id: 'reset', title: 'Reset Password', sectionId: 'reset', subtitle: 'Recover your password' },
  { id: 'member', title: 'Member', sectionId: 'member', subtitle: 'Member Application & Profile' },
  { id: 'profcon', title: 'ProfCon', sectionId: 'profcon', subtitle: 'Professional Conduct Guide' },
  { id: 'dashboard', title: 'Dashboard', sectionId: 'dashboard', subtitle: 'Dashboard Features' },
  { id: 'finance', title: 'Finance', sectionId: 'finance', subtitle: 'Financial Management' },
  { id: 'admin', title: 'Admin', sectionId: 'admin', subtitle: 'Admin Features' }
]

const links = [
  { id: 'home', title: 'Guide', href: '#home', sectionId: 'home' },
  { id: 'profcon', title: 'ProfCon', href: '#profcon', sectionId: 'profcon' },
  { id: 'member', title: 'Member', href: '#member', sectionId: 'member' },
  { id: 'dashboard', title: 'Dashboard', href: '#dashboard', sectionId: 'dashboard' },
  { id: 'finance', title: 'Finance', href: '#finance', sectionId: 'finance' },
  { id: 'admin', title: 'Admin', href: '#admin', sectionId: 'admin' }
]

const sections = [
  { id: 'accessing', title: 'Accessing the Portal', sectionId: 'it-accessing', tab: 'it-system' },
  { id: 'requirements', title: 'Requirements', sectionId: 'it-requirements', tab: 'it-system' },
  { id: 'user-permission', title: 'Authorised User Permission', sectionId: 'it-user-permission', tab: 'it-system' },
  { id: 'using', title: 'Using the System', sectionId: 'it-using', tab: 'it-system' },
  { id: 'dashboard', title: 'Dashboard Overview', sectionId: 'it-dashboard', tab: 'it-system' },
  { id: 'features', title: 'System Features', sectionId: 'it-features', tab: 'it-system' },
  { id: 'register-complaint', title: 'Register a Complaint', sectionId: 'profcon-register-complaint', tab: 'profcon' },
  { id: 'review-complaint-status', title: 'Review Complaint Status', sectionId: 'profcon-review-complaint-status', tab: 'profcon' },
  { id: 'managing-complaints', title: 'Managing Complaints', sectionId: 'profcon-managing-complaints', tab: 'profcon' },
  { id: 'submitting-appeal', title: 'Submitting an Appeal', sectionId: 'profcon-submitting-appeal', tab: 'profcon' },
  { id: 'managing-appeals', title: 'Managing Appeals', sectionId: 'profcon-managing-appeals', tab: 'profcon' },
  { id: 'new-application', title: 'New Application', sectionId: 'member-new-application', tab: 'member' },
  { id: 'new-registration-email', title: 'New Registration Email', sectionId: 'member-new-registration-email', tab: 'member' },
  { id: 'address-details', title: 'Address Details', sectionId: 'member-address-details', tab: 'member' },
  { id: 'user-dashboard', title: 'User Dashboard', sectionId: 'dashboard-main', tab: 'dashboard' },
  { id: 'change-address', title: 'Changing Address', sectionId: 'dashboard-change-address', tab: 'dashboard' },
  { id: 'upload-documents', title: 'Uploading Documents', sectionId: 'dashboard-upload-documents', tab: 'dashboard' },
  { id: 'professions', title: 'Professions', sectionId: 'dashboard-professions', tab: 'dashboard' },
  { id: 'qualifications', title: 'Add Qualifications', sectionId: 'dashboard-qualifications', tab: 'dashboard' },
  { id: 'my-finances', title: 'My Finances', sectionId: 'finance-my-finances', tab: 'finance' },
  { id: 'pay-invoice', title: 'View and Pay Invoice', sectionId: 'finance-pay-invoice', tab: 'finance' },
  { id: 'pay-ozow', title: 'Pay with Ozow', sectionId: 'finance-pay-ozow', tab: 'finance' },
  { id: 'view-statement', title: 'View Statement', sectionId: 'finance-view-statement', tab: 'finance' },
  { id: 'admin-new-applications', title: 'New Applications List', sectionId: 'admin-new-applications', tab: 'admin' },
  { id: 'admin-applicant-profile', title: "Applicant's Profile", sectionId: 'admin-applicant-profile', tab: 'admin' },
  { id: 'admin-approve-reject', title: 'Approve/Reject', sectionId: 'admin-approve-reject', tab: 'admin' },
  { id: 'admin-update-membership', title: 'Update Membership Status', sectionId: 'admin-update-membership', tab: 'admin' },
  { id: 'admin-allocate-payment', title: 'Allocate Payment to Invoice', sectionId: 'admin-allocate-payment', tab: 'admin' }
]

// --- Searchable content index ---
const contentIndex = [
  // ProfCon
  {
    tab: 'profcon',
    section: 'profcon-register-complaint',
    title: 'Register a Complaint',
    text: `To initiate the complaint process, you need to register the complaint online.
Start the Professional Conduct Online Complaint Registration from your web browser by accessing the following web address: https://sacssponline.co.za/profcon/registercomplainant. You will be presented with the initial complaint form.

i. Complaint Of Alleged Unprofessional Conduct
Begin by filling in your personal details on the first page of the complaint form. Once completed, click the "Save" button to proceed.

ii. Address Information
Next, provide your physical address details in the fields provided. After filling in the information, click "Next".
If your postal address is the same as your residential address, you can select the "Same as Residential" checkbox. Click "Save" to confirm your address details.

iii. Complainant Details
To proceed with filing the complaint against a specific individual, you must provide their SACSSP Registration Number. Enter the respondent's "SACSSP Registration Number" into the designated field and then click "Start Complain".

iv. Identifying Particulars of The Respondent
Complete the form by providing all required information regarding the respondent and the nature of the complaint. You can select one or more specific Acts or Omissions from the provided list. Once all necessary details are entered, click "Save" to continue.

v. Respond to Complain (Complaint Narrative)
Provide a detailed narrative or description of the complaint in the provided text areas. Fill in the form accurately and comprehensively, then click "Save".

vi. Attach Additional Documentary Evidence (Optional)
This step allows you to upload supplementary documents that support your complaint. Attaching evidence is optional. You can either upload relevant files or skip this step by clicking the "Skip >>>" button.

vii. Upload Required Documents
In this final step for registration, you are required to download the official Professional Conduct Form C.1.1, fill it out completely, and then upload the completed form.
After filling and saving Form C.1.1, upload the document using the provided interface. Click "Save" to submit the form and complete the initial complaint registration.
Upon successful submission, the system will confirm that the complaint has been submitted and provide you with a unique reference number. It is crucial to save this reference number for future tracking and correspondence regarding your complaint.`
  },
  {
    tab: 'profcon',
    section: 'profcon-review-complaint-status',
    title: 'Review Complaint Status',
    text: `After submitting your complaint, you can check its status online.
Start the Professional Conduct Complaint Review Online from your web browser by accessing the following web address: https://sacssponline.co.za/profcon/reviewcomplain.
Enter the unique Reference Number you received upon submission into the designated field, then click the "Search" button.
The system will then display the status of your submitted complaint. Based on the status, you may have options such as appealing the decision if applicable.`
  },
  {
    tab: 'profcon',
    section: 'profcon-managing-complaints',
    title: 'Managing Complaints',
    text: `This section is intended for administrators who manage complaints via the ProfCon admin panel.
Accessing Complaints
Log in to the admin panel. Navigate through the menu: Professional Conduct > Complaints. You can locate a specific complaint using the search field provided at the top of the complaints list or by navigating through the pages using the pagination controls at the bottom. Once you have found the desired complaint, click the corresponding "View" button to open its details.

Reviewing Complaint Details
Within the complaint view, use the tabbed navigation (e.g., Complainant Details, Respondent Details, Complaint Info, etc.) to access different sections and information related to the complaint.

Sending Notifications
Acknowledgement Email (to Complainant): Navigate to the "Acknowledgement Email" tab. Fill in any required fields or customize the message if necessary. Click the "Send Email" button. After sending, navigate back to the "Acknowledgement Email" tab. A confirmation message, such as "Complainant was notified on Complain from Professional Conduct team," should be displayed, indicating the email was sent successfully.
Notice Letter (to Respondent): Navigate to the "Notice Letter" tab. Fill in the necessary fields. Click the "Send Email" button. Like the acknowledgement email, navigate back to the "Notice Letter" tab after sending. A confirmation message like "Respondent was notified on Complain from Professional Conduct" should appear.

Preliminary Investigation
Navigate to the "Preliminary investigation" tab. Fill in the investigation form with findings, decisions, and any relevant notes. In the example shown, the outcome is that the matter has been closed. Complete the form according to the investigation results and save the changes.`
  },
  {
    tab: 'profcon',
    section: 'profcon-submitting-appeal',
    title: 'Submitting an Appeal',
    text: `If you disagree with a decision made regarding your complaint, you may have the option to appeal.
Start the Professional Conduct Online Appeal from your web browser by accessing the following web address: https://sacssponline.co.za/ProfCon/Appeals. You will be presented with a form.
1. Enter the Reference Number of the complaint you wish to appeal, then click "Search".
2. The system will display the complaint status. If an appeal is possible (e.g., the matter was closed as shown in the example), an "Appeal Decision" button should be available. Click this button to proceed.
3. Provide a clear and concise reason for your appeal in the text area provided. Once you have stated your grounds for appeal, click "Save".
Upon successful submission, a confirmation message will be displayed, indicating that the appeal has been sent for review by the council.`
  },
  {
    tab: 'profcon',
    section: 'profcon-managing-appeals',
    title: 'Managing Appeals',
    text: `This section describes how administrators can access, and review submitted appeals.
Navigate through the admin panel menu: Professional Conduct > Appeals. Locate the specific appeal you wish to review (using search or pagination) and click the corresponding "View" button. The system will display the details of the appeal, typically presenting the information in the format of the official Form PC-6 (Notice of Appeal).`
  },
  // Member
  {
    tab: 'member',
    section: 'member-new-application',
    title: 'New Application',
    text: `The next step will be to add the address. On the address screen, fill in your residential and postal address then click "Save". If the user selects "South African Citizen" both the ID (required) and passport (optional) fields are visible, and the "Citizenship" field is hidden. If the user selects "Non-South African Citizen" the ID field is hidden. The passport filed is required and the "Citizenship" field is visible. If the user selects "Permanent Resident with ID" both the ID (required) and passport (optional) fields are visible, and the "Citizenship" field is visible.`
  },
  {
    tab: 'member',
    section: 'member-new-registration-email',
    title: 'New Registration Email',
    text: `Instructions and information about the new registration email process.`
  },
  {
    tab: 'member',
    section: 'member-address-details',
    title: 'Address Details',
    text: `The next step will be to add the address. On the address screen, fill in your residential and postal address then click "Save".`
  },
  // Dashboard
  {
    tab: 'dashboard',
    section: 'dashboard-main',
    title: 'User Dashboard',
    text: `After the user has successfully added their address, they are redirected to the dashboard. On the "Dashboard" screen, users can edit their residential and postal address, upload documents, add a profession(s), qualification(s), and access their financial details.`
  },
  {
    tab: 'dashboard',
    section: 'dashboard-change-address',
    title: 'Changing Address',
    text: `On the dashboard screen select "Address" (it is selected by default) and then click on the button to edit the desired address. On the next screen make the necessary changes and click on the "Save" button.`
  },
  {
    tab: 'dashboard',
    section: 'dashboard-upload-documents',
    title: 'Uploading Documents',
    text: `Navigate to members profile, click on "Documents" and then "Upload ID/Passport". You will be redirected to "Upload Documents" page. Click "Choose Files" and a pop-up screen will open. Navigate to the folder where the desired file is saved, select it and click "Save". After you have successfully uploaded your document, you will find the uploaded document saved on the documents. Delete a document by clicking the "bin" button on the right side of the saved document. A confirmation message will be displayed if the deletion has been successful.`
  },
  {
    tab: 'dashboard',
    section: 'dashboard-professions',
    title: 'Professions',
    text: `Navigate to members profile, click on "Professions" tab a list of your professions will be displayed.`
  },
  {
    tab: 'dashboard',
    section: 'dashboard-qualifications',
    title: 'Add Qualifications',
    text: `Navigate to members profile, click on "Qualifications" and then "New Qualification". You will be redirected to another page. Fill in the required fields and then click "Save". After saving your qualification successfully, it will be listed under "My Qualifications" on the members profile page.`
  },
  // Finance
  {
    tab: 'finance',
    section: 'finance-my-finances',
    title: 'My Finances',
    text: `To pay an invoice, navigate to Finances and click on "View" button for the invoice you wish to pay for.`
  },
  {
    tab: 'finance',
    section: 'finance-pay-invoice',
    title: 'View and Pay Invoice',
    text: `Select the "Pay with Ozow" button on the below screen to pay an invoice.`
  },
  {
    tab: 'finance',
    section: 'finance-pay-ozow',
    title: 'Pay with Ozow screen',
    text: `Then payment gateway screen for Ozow will be displayed as per below, select any bank of your choice, follow prompts and complete the payment. There is also option to cancel payment (Abort payment transaction) then pay at later stage.`
  },
  {
    tab: 'finance',
    section: 'finance-view-statement',
    title: 'View Statement',
    text: `Instructions and information about viewing your statement.`
  },
  // Admin
  {
    tab: 'admin',
    section: 'admin-new-applications',
    title: 'New Applications List',
    text: `Once logged as Admin (Council Registration Office) you will be directed to dashboard with list of all applications with different statuses (New, Approved, and Rejected) select View Profile.`
  },
  {
    tab: 'admin',
    section: 'admin-applicant-profile',
    title: "Applicant's Profile",
    text: `Applicant's profile opened, Council Registration Officer has access to Approve/reject the application, edit applicant's profile (user details) as well as to Update Membership status. Registration Officer will also have access to browse through all Tabs (Address, Documents, Professions, Qualifications and Finances) to confirm if all the required details have been captured accordingly before approving the application.`
  },
  {
    tab: 'admin',
    section: 'admin-approve-reject',
    title: "Applicant's Profile (Approve/Reject)",
    text: `After the Registration office has assessed the application they can then either approve or reject, the Applicant will be sent notification on either selection then Application Status will be updated from New to Approved or Rejected.`
  },
  {
    tab: 'admin',
    section: 'admin-update-membership',
    title: 'Update Membership Status',
    text: `Membership status can be updated by registration Office whenever requested with below options and notes can be added as well.`
  },
  {
    tab: 'admin',
    section: 'admin-allocate-payment',
    title: 'Admin (Finance – allocate payment to invoice)',
    text: `Council Financial Officer will have access to allocate all unallocated payments to relevant accounts by selecting Finance, then Invoices and choose any invoice from the list to allocate to.`
  },
  // Register as a User
  {
    tab: 'register',
    section: 'register',
    title: 'Register as a User',
    text: `To be registered as a new user, click on the link "Register as a new user" (on the login page) and you will be redirected to the registration page. Fill in all the required fields. After clicking the "Signup" button, the system will display a confirmation page and an email will be sent to your registered email account. Confirm your email address by clicking on the link provided to you.`
  },
  // System Login
  {
    tab: 'login',
    section: 'login',
    title: 'System Login',
    text: `Once you have been registered/added on the system, use your username/email address and your password combination, and press the "Log In" button.`
  },
  // Reset Password
  {
    tab: 'reset',
    section: 'reset',
    title: 'Reset Password',
    text: `Reset your password by clicking "Forgot your password" link on the login page.`
  }
]

const filteredTabs = computed(() => tabs)
const filteredQuickLinks = computed(() => activeTab.value === 'index' ? [] : links.filter(link => link.id === activeTab.value))

const currentTab = computed(() => tabs.find(tab => tab.id === activeTab.value) || tabs[0])

const breadcrumbs = computed(() => [
  { key: 'home', label: 'Home' },
  { key: currentTab.value.id, label: currentTab.value.title }
])

const sectionIds = sections.reduce((acc, section) => {
  acc[section.id] = section.sectionId
  return acc
}, {})

const activeContent = computed(() => {
  switch (activeTab.value) {
    case 'profcon':
      return ProfConContent
    case 'member':
      return MemberContent
    case 'dashboard':
      return DashboardContent
    case 'finance':
      return FinanceContent
    case 'admin':
      return AdminContent
    case 'register':
      return RegisterContent
    case 'login':
      return LoginContent
    case 'reset':
      return ResetContent
    default:
      return null
  }
})

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function onSearch() {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) {
    showResults.value = false
    return
  }
  // Search in contentIndex
  const results = contentIndex
    .map(item => {
      const matchIdx = item.text.toLowerCase().indexOf(q)
      if (
        item.title.toLowerCase().includes(q) ||
        (item.text && item.text.toLowerCase().includes(q))
      ) {
        let snippet = ''
        if (matchIdx !== -1) {
          const start = Math.max(0, matchIdx - 40)
          const end = Math.min(item.text.length, matchIdx + 40)
          snippet = item.text.substring(start, end) + (end < item.text.length ? '...' : '')
        } else {
          snippet = item.text.substring(0, 80) + (item.text.length > 80 ? '...' : '')
        }
        return {
          id: `${item.tab}-${item.section}`,
          title: item.title,
          snippet,
          link: `#${item.section}`,
          tab: item.tab
        }
      }
      return null
    })
    .filter((item) => item !== null)
  searchResults.value = results
  showResults.value = true
}

function onResultSelect(result) {
  activeTab.value = result.tab
  showResults.value = false
  highlightTerm.value = searchQuery.value.trim()
  nextTick(() => {
    const sectionEl = document.getElementById(result.section)
    if (sectionEl) {
      // Try to scroll to the first <mark> inside the section
      const mark = sectionEl.querySelector('mark')
      if (mark) {
        mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
        mark.classList.add('highlighted-mark')
        setTimeout(() => mark.classList.remove('highlighted-mark'), 2000)
      } else {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  })
}

// Helper to highlight search term in content
function highlightContent(html, term) {
  if (!term) return html
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return html.replace(regex, '<mark>$1</mark>')
}

// Handle navigation from search results
watch(searchResults, (results) => {
  if (results.length === 1) {
    // Optionally auto-navigate to the result
  }
})

// Add new ref for tracking expanded tabs
const expandedTabs = ref(new Set())

// Add new computed property for sidebar menu structure
const sidebarMenu = computed<any[]>(() => {
  const menu: any[] = []
  for (const tab of tabs) {
    const tabSections = sections.filter(s => s.tab === tab.id)
    if (tabSections.length > 1) {
      menu.push({
        id: tab.id,
        title: tab.title,
        subtitle: tab.subtitle,
        hasSubmenu: true,
        sections: tabSections
      })
    } else {
      menu.push({
        id: tab.id,
        title: tab.title,
        subtitle: tab.subtitle,
        hasSubmenu: false
      })
    }
  }
  return menu
})

// Add toggle function for submenu expansion
function toggleSubmenu(tabId) {
  if (expandedTabs.value.has(tabId)) {
    expandedTabs.value.delete(tabId)
  } else {
    expandedTabs.value.add(tabId)
  }
}

// Update the onSubmenuItemClick function
function onSubmenuItemClick(tabId, sectionId) {
  activeTab.value = tabId
  showResults.value = false
  nextTick(() => {
    nextTick(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}
</script>

<style scoped>
.centered-layout-bg {
  min-height: 100vh;
  background: #f6f8fa;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.centered-layout {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  max-width: 1600px;
  padding: 2rem 0;
}

.centered-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #075c09;
  color: #fff;
  border-radius: 0 1.5rem 1.5rem 0;
  box-shadow: 0 4px 32px rgba(7,92,9,0.13);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  z-index: 100;
}

.sidebar-header {
  margin-bottom: 2rem;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.15rem;
}

.sidebar-subtitle {
  font-size: 0.70rem;
  color: #e0e0e0;
  margin-bottom: 0.15rem;
}

.centered-nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  margin-top: 1.2rem;
}

.centered-nav-item {
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.1rem;
  position: relative;
  min-width: 0;
  box-shadow: none;
  gap: 0.7rem;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  color: #c7e7d1;
}

.nav-icon svg {
  width: 18px;
  height: 18px;
}

.centered-nav-main {
  font-weight: 700;
  font-size: 0.80rem;
  color: #fff;
  line-height: 1.1;
}

.centered-nav-sub {
  font-size: 0.70rem;
  color: #c7e7d1;
  font-weight: 400;
  margin-top: 0.05rem;
  line-height: 1.1;
}

.centered-nav-item.active {
  background: #fff;
  color: #075c09;
  box-shadow: 0 2px 8px rgba(7, 92, 9, 0.07);
}

.centered-nav-item.active .centered-nav-main {
  color: #075c09;
}

.centered-nav-item.active .centered-nav-sub {
  color: #075c09;
}

.centered-nav-item.active .nav-icon {
  color: #075c09;
}

.centered-nav-item:hover,
.centered-nav-item:focus {
  background: rgba(255, 255, 255, 0.13);
  color: #fff;
}

.centered-nav-item:hover .centered-nav-main,
.centered-nav-item:focus .centered-nav-main {
  color: #fff;
}

.centered-nav-item:hover .centered-nav-sub,
.centered-nav-item:focus .centered-nav-sub {
  color: #e0e0e0;
}

.centered-nav-item:hover .nav-icon,
.centered-nav-item:focus .nav-icon {
  color: #fff;
}

.centered-main-content {
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #f6f8fa;
  padding: 0;
  margin-left: 260px;
}

.centered-content-card {
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 32px rgba(7, 92, 9, 0.10);
  padding: 3.2rem 3.2rem 2.5rem 3.2rem;
  max-width: 1150px;
  margin-bottom: 2rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Search styles (reuse modern styles for input/button) */
.modern-search-container {
  width: 100%;
  margin-bottom: 2.2rem;
}

.modern-search-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modern-search-input {
  width: 100%;
  padding: 0.7rem 1.1rem;
  border-radius: 1.1rem;
  border: none;
  background: rgba(255, 255, 255, 0.13);
  color: #fff;
  font-size: 0.80rem;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  transition: background 0.2s, box-shadow 0.2s;
}

.modern-search-input::placeholder {
  color: #e0e0e0;
  opacity: 1;
}

.modern-search-btn {
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.45rem 0.45rem;
  width: 2.2rem;
  height: 2.2rem;
  min-width: 2.2rem;
  min-height: 2.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(7, 92, 9, 0.08);
  transition: background 0.18s;
  margin-left: 0.1rem;
}

.modern-search-btn:hover,
.modern-search-btn:focus {
  background: #e6f4ea;
}

.modern-search-icon {
  width: 1.1rem;
  height: 1.1rem;
  fill: #075c09;
}

.modern-search-helper {
  color: #e0e0e0;
  font-size: 0.63rem;
  margin-top: 0.18rem;
  margin-bottom: 0.2rem;
}

.modern-content-header {
  margin-bottom: 2.2rem;
}

.modern-content-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #075c09;
  margin-bottom: 0.5rem;
}

.modern-content-subtitle {
  font-size: 1.18rem;
  color: #222;
  margin-bottom: 0.5rem;
}

@media (max-width: 1200px) {
  .centered-layout {
    gap: 1.5rem;
  }

  .centered-sidebar {
    min-width: 270px;
    max-width: 350px;
    padding: 1.5rem 1rem 1.5rem 1rem;
  }

  .centered-content-card {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
}

@media (max-width: 900px) {
  .centered-layout {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .centered-sidebar {
    width: 100%;
    min-width: 0;
    max-width: 100vw;
    margin-bottom: 1.5rem;
    border-radius: 1.5rem;
  }

  .centered-main-content {
    padding: 0;
  }

  .centered-content-card {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
    min-width: 0;
    max-width: 100vw;
  }
}

@media (max-width: 600px) {
  .centered-layout-bg {
    padding: 0;
  }

  .centered-layout {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .centered-sidebar {
    padding: 1rem;
    min-width: 0;
    max-width: 100vw;
    border-radius: 1.2rem;
  }

  .centered-content-card {
    padding: 0.7rem 0.1rem 0.5rem 0.1rem;
    border-radius: 1.2rem;
  }
}

mark {
  background: #fff59d;
  color: #222;
  border-radius: 0.2em;
  padding: 0 0.1em;
}
.highlighted-mark {
  background: #ffe066 !important;
  transition: background 0.5s;
}

/* Add after .centered-nav-menu styles */
.submenu {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 1.5rem;
  margin-top: 0.1rem;
  margin-bottom: 0.3rem;
}
.submenu-item {
  background: none;
  border: none;
  color: #c7e7d1;
  text-align: left;
  padding: 0.35rem 0.5rem 0.35rem 0.5rem;
  border-radius: 0.7rem;
  font-size: 0.70rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  margin-bottom: 0.1rem;
  min-width: 0;
  box-shadow: none;
}
.submenu-item:hover,
.submenu-item:focus {
  background: #e6f4ea;
  color: #075c09;
}
.submenu-chevron {
  margin-left: auto;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}
.submenu-chevron.expanded {
  transform: rotate(90deg);
}

.system-guide-summary {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: linear-gradient(90deg, #e6f4ea 60%, #fff 100%);
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(7, 92, 9, 0.07);
  padding: 2rem 2.2rem 2rem 1.5rem;
  margin: 2.2rem auto 1.5rem auto;
  max-width: 1100px;
  width: 100%;
}
.summary-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #075c09;
  border-radius: 1rem;
  width: 60px;
  height: 60px;
  box-shadow: 0 2px 8px rgba(7, 92, 9, 0.10);
}
.summary-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #075c09;
  margin-bottom: 0.5rem;
}
.summary-text {
  font-size: 1.02rem;
  color: #1a1a1a;
  margin-bottom: 0;
  line-height: 1.6;
}
@media (max-width: 900px) {
  .system-guide-summary {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 0.7rem 1rem 0.7rem;
    gap: 1rem;
  }
  .summary-icon {
    width: 48px;
    height: 48px;
  }
}
</style>
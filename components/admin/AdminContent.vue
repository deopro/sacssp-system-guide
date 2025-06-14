<template>
  <div class="content-section">
    <!-- New Applications List -->
    <div id="admin-new-applications" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">New Applications List</h2>
      <p class="mb-4">View and manage new applications.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p class="mb-4">Once logged as Admin (Council Registration Office) you will be redirected to dashboard with list of all applications with different statuses (New, Approved, and Rejected) select View Profile</p>
     <div class="figure-container">
                <img src="/media/admin1.png" alt="View and manage new applications illustration" class="figure2" />
          <div class="figure-caption">Figure: View and manage new applications</div>
        </div>
      </div>
    </div>

    <!-- Applicant's Profile -->
    <div id="admin-applicant-profile" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">Applicant's Profile</h2>

      <p>Applicant’s profile opened, Council Registration Officer has access to Approve/reject the application, edit applicant’s profile (user details) as well as to Update Membership status.</p>
      <p>Registration Officer will also have access to browse through all Tabs (Address, Documents, Professions, Qualifications and Finances) to confirm if all the required details have been captured accordingly before approving the application.</p>
      <p class="mb-4">View and manage applicant profiles.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
      <div class="figure-container">
                <img src="/media/admin2.png" alt="Applicant's Profile illustration" class="figure2" />
          <div class="figure-caption">Figure: Applicant's Profile</div>
        </div>
      </div>
    </div>

    <!-- Approve/Reject -->
    <div id="admin-approve-reject" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">Approve/Reject</h2>
      <p class="mb-4">Approve or reject applications.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>After the Registration office has assessed the application they can then either approve or reject, the Applicant will be sent notification on either selection then Application Status will be updated from New to Approved or Rejected. </p>
        <div class="figure-container">
                <img src="/media/admin3.png" alt=">Approve or reject applications illustration" class="figure2" />
          <div class="figure-caption">Figure: Approve or reject applications</div>
        </div>
      </div>
    </div>

    <!-- Update Membership Status -->
    <div id="admin-update-membership" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">Update Membership Status</h2>
      <p class="mb-4">Update membership status for applicants.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>Membeship status can be updated by registration Office when ever requested with below options and notes can be added as well.</p>
        <div class="figure-container">
                <img src="/media/admin4.png" alt=">Update Membership Status illustration" class="figure2" />
          <div class="figure-caption">Figure: Update Membership Status</div>
        </div>
      </div>
    </div>

    <!-- Allocate Payment to Invoice -->
    <div id="admin-allocate-payment" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.5 Allocate Payment to Invoice</h2>
      <p class="mb-4">Allocate payments to invoices.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
       <p>Council Financial Officer will have access to allocate all unalocated payments to relevant accounts buy selecting Finance, then Invoices and chose any invoice from the list to allocate to.</p>
       <div class="figure-container">
                <img src="/media/admin5.png" alt=">Allocate payments to invoices illustration" class="figure2" />
          <div class="figure-caption">Figure: Allocate payments to invoices</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin content component
</script>

<style scoped>
.content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  scroll-margin-top: 5rem;
}

.section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section p {
  margin-bottom: 1rem;
}

.card {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.image-placeholder {
  width: 100%;
  height: 12rem;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder span {
  color: #6b7280;
}

.image {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.caption {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}
</style> 
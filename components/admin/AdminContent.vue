<template>
  <div class="content-section">
    <!-- New Applications List -->
    <div id="admin-new-applications" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.1 New Applications List</h2>
      <p class="mb-4">View and manage new applications.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Image placeholder</span>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600">Figure: New Applications List</p>
      </div>
    </div>

    <!-- Applicant's Profile -->
    <div id="admin-applicant-profile" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.2 Applicant's Profile</h2>
      <p class="mb-4">View and manage applicant profiles.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Image placeholder</span>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600">Figure: Applicant's Profile</p>
      </div>
    </div>

    <!-- Approve/Reject -->
    <div id="admin-approve-reject" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.3 Approve/Reject</h2>
      <p class="mb-4">Approve or reject applications.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Image placeholder</span>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600">Figure: Approve/Reject</p>
      </div>
    </div>

    <!-- Update Membership Status -->
    <div id="admin-update-membership" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.4 Update Membership Status</h2>
      <p class="mb-4">Update membership status for applicants.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Image placeholder</span>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600">Figure: Update Membership Status</p>
      </div>
    </div>

    <!-- Allocate Payment to Invoice -->
    <div id="admin-allocate-payment" class="scroll-mt-20">
      <h2 class="text-2xl font-bold mb-4">6.5 Allocate Payment to Invoice</h2>
      <p class="mb-4">Allocate payments to invoices.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <span class="text-gray-500">Image placeholder</span>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600">Figure: Allocate Payment to Invoice</p>
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